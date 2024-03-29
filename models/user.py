#!/usr/bin/python3
"""
    Implementation of the User class which inherits from BaseModel
"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String
from sqlalchemy.orm import relationship


class User(BaseModel, Base):
    """
    Definition of the User class
    """
    __tablename__ = "users"
    email = Column(String(128), nullable=False)
    password = Column(String(128), nullable=False)
    first_name = Column(String(128), nullable=False)
    last_name = Column(String(128), nullable=False)
    profile_image = Column(String(128), nullable=True)

    images = relationship("Image", backref="user",
                          cascade="delete")
    shared_with = relationship("SharedWith", backref="user",
                               cascade="delete")
