#!/usr/bin/python3
from flask import Blueprint

app_views = Blueprint('app_views', __name__, url_prefix='/api/v1')

from api.v1.views.images import *
from api.v1.views.shared_with import *
from api.v1.views.users import *
