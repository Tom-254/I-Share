#!/usr/bin/python3
""" Shared with routes handler """
from api.v1.views import app_views
from flask import jsonify, abort, request, make_response
from models import storage
from models.shared_with import SharedWith
from models.user import User
from models.images import Image

@app_views.route('/share_images', methods=['POST'])
@app_views.route('/share_images/<share_id>', methods=['POST'])
def post_shared_with(shared_id=None):
    """Share an Image"""
    print(request.headers)

@app_views.route('/shared_images', methods=['GET'])
@app_views.route('/shared_images/<shared_id>', methods=['GET'])
def get_shared_with(shared_id=None):
    """Retrieves the list of all Image objects
    or a specific Image object"""
    print(request.headers)

@app_views.route('/unshare_images', methods=['DELETE'])
@app_views.route('/unshare_images/<share_id>', methods=['DELETE'],
                 strict_slashes=False)
def del_shared_with(share_id=None):
    """Deletes a Image object"""
    print(request.headers)
