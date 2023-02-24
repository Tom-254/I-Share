#!/usr/bin/python3
"""users route handler"""
from api.v1.views import app_views
from flask import jsonify, abort, request, make_response
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

    users = storage.all(User)
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
    return jsonify({})


def post_user(request):
    """
        Create new user
    """

    try:
        request_data = request.get_json()
    except  Exception as ex:
        return make_response(jsonify({'error': 'Not a JSON'}), 400)

    for field in ["email", "password", "first_name", "last_name"]:
        if field not in request_data:
            return make_response(jsonify({'error': f"Missing {field}"}), 400)

    user = User(**request_data)
    storage.new(user)
    storage.save()
    return jsonify(user.to_dict())


def put_user(user_id, request):
    """
        update new user
    """
    user = get_user(user_id)
    request_data = request.get_json()
    if request_data is None:
        abort(400, 'Not a JSON')
    for key, value in request_data.items():
        if (key not in ('id', 'created_at', 'updated_at', 'email')):
            setattr(user, key, value)
    user.save()
    return jsonify(user.to_dict())


@app_views.route('/users', methods=['GET', 'POST', ],
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
    elif (request.method == "POST"):
        return make_response(post_user(request), 201)
    elif (request.method == "PUT"):
        return make_response(put_user(user_id, request), 200)
