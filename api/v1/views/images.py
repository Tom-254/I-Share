#!/usr/bin/python3
"""Creates the images routes"""

from flask import jsonify, abort, request, make_response
from api.v1.views import app_views
from models import storage
from models.images import Image


@app_views.route('/images', methods=['POST'])
def post_image():
    """Adds an Image"""

    try:
        req = request.get_json()
        print(req)
    except Exception as ex:
        return make_response(jsonify({'error': 'Not a JSON'}), 400)

    for field in ["user_id", "image_name", "image_path", "image_description"]:
        if field not in req:
            return make_response(jsonify({'error': f"Missing {field}"}), 400)

    image = Image(**req)
    image.save()
    return make_response(jsonify(image.to_dict()), 201)


@app_views.route('/images/<image_id>', methods=['PUT'])
def put_image(image_id=None):
    """Update an Image"""

    image = storage.get(Image, image_id)

    if image is None:
        abort(404)

    try:
        req = request.get_json()
    except Exception as ex:
        return make_response(jsonify({'error': 'Not a JSON'}), 400)

    for key, val in req.items():
        if key not in ('id', 'created_at', 'updated_at'):
            setattr(image, key, val)
    image.save()
    return make_response(jsonify(image.to_dict()), 201)


@app_views.route('/images', methods=['GET'])
@app_views.route('/images/<image_id>', methods=['GET'])
def get_amenity(image_id=None):
    """Retrieves the list of all Image objects
    or a specific Image object"""
    if image_id is None:
        images = [image.to_dict() for image
                  in storage.all("Image").values()]
        return make_response(jsonify(images), 200)
    image = storage.get(Image, image_id)
    if image is None:
        abort(404)
    return make_response(jsonify(image.to_dict()), 200)


@app_views.route('/images/<image_id>', methods=['DELETE'],
                 strict_slashes=False)
def del_amenity(image_id=None):
    """Deletes a Image object"""
    image = storage.get(Image, image_id)
    if image is None:
        abort(404)
    image.delete()
    storage.save()
    return jsonify({})
