#!/usr/bin/python3
"""users route handler"""
from api.v1.views import app_views
from flask import jsonify, abort, request, make_response
import bcrypt
from models import storage
from models.user import User

def get_user(user_id):
    """
        Gets a user
    """
    try:
        user = storage.get(User, user_id)
        user.to_dict()
    except Exception:
        abort(404)
    return user


def get_users(user_id):
    """
       Retrieves the list of users
    """
    if user_id is not None:
        user = get_user(user_id)
        dict_user = user.to_dict()
        return jsonify(dict_user)

    users = storage.all("User")
    all_users = []
    for user in users.values():
        all_users.append(user.to_dict())
    return jsonify(all_users)


def delete_user(user_id):
    """
        delete user
    """
    user = get_user(user_id)
    storage.delete(user)
    storage.save()
    return jsonify({"success" : f"{user.first_name} Deleted successfully"})


def post_user(request):
    """
        Create new user
    """

    try:
        request_data = request.get_json()
    except Exception as ex:
        return make_response(jsonify({'error': 'Not a JSON', "status" : 400}))

    if request_data["password"] != request_data["confirm_password"]:
        return make_response(jsonify({"error": "Confirm Password Doesn't Match Password!",
                                      "status" : 403}))

    for field in ["email", "password", "first_name", "last_name"]:
        if field not in request_data:
            return make_response(jsonify({'error': f"Missing {field}", "status" : 400}))

    try:
        user = storage.get_user_with_email(request_data["email"]).to_dict()
        return make_response(jsonify({"error": "Email Exists. Please Login."}))
    except Exception:
        pass

    request_data["password"] = bcrypt.hashpw(request_data["password"].encode('utf-8')  , bcrypt.gensalt())
    del request_data["confirm_password"]

    user = User(**request_data)
    storage.new(user)
    storage.save()
    user_dict = user.to_dict()
    del user_dict["password"]
    return jsonify(user_dict)


def put_user(user_id, request):
    """
        update new user
    """
    user = get_user(user_id)
    request_data = request.get_json()
    if request_data is None:
        abort(400, 'Not a JSON')

    for key, value in request_data.items():
        if (key not in ('id', 'created_at', 'updated_at', 'email', '__class__')):
            setattr(user, key, value)
    user.save()
    user_dict = user.to_dict()
    del user_dict["password"]
    return jsonify(user_dict)

@app_views.route('/login', methods=['POST'])
def login():
    """
    Gets a single user
    """
    request_data = request.get_json()
    if request_data is None:
        abort(400, 'Not a JSON')

    for field in ["email", "password"]:
        if field not in request_data:
            return make_response(jsonify({'error': f"Missing {field}", "status" : 400}))

    try:
        user = storage.get_user_with_email(request_data["email"]).to_dict()
    except Exception:
        return make_response(jsonify({"error": "Email Does not exist!", "status" : 403}))

    if not bcrypt.checkpw(request_data["password"].encode('utf-8'), user["password"].encode('utf-8')):
        return make_response(jsonify({"error": "Wrong Password!", "status" : 403}))

    del user["password"]
    return make_response(jsonify(user), 200)


@app_views.route('/signup', methods=['POST'])
def signup():
    """
    Creates a single user
    """
    return make_response(post_user(request), 201)

@app_views.route('/users', methods=['GET'],
                 defaults={'user_id': None}, strict_slashes=False)
@app_views.route('/users/<user_id>', methods=['GET', 'DELETE', 'PUT'])
def users(user_id):
    """
        Handle user requests
    """
    if (request.method == "GET"):
        return make_response(get_users(user_id), 200)
    elif (request.method == "DELETE"):
        return make_response(delete_user(user_id), 200)
    elif (request.method == "PUT"):
        return make_response(put_user(user_id, request), 200)
