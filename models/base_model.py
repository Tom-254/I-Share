#!/usr/bin/python3
"""
    This module defines the BaseModel class
"""

import uuid
from datetime import datetime
import models
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, String, DateTime

Base = declarative_base()


class BaseModel:
    """
        Base class inheritated by other classes
    """

    id = Column(String(60), nullable=False, primary_key=True)
    created_at = Column(DateTime, default=datetime.utcnow(),
                        nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow(),
                        nullable=False)

    def __init__(self, *args, **kwargs):
        """
            Initialize public instance attributes.
        """
        if (len(kwargs) == 0):
            self.id = str(uuid.uuid4())
            self.created_at = datetime.now()
            self.updated_at = datetime.now()

        else:
            try:
                time_format = "%Y-%m-%dT%H:%M:%S.%f"
                kwargs["created_at"] = datetime.strptime(kwargs["created_at"],
                                                         time_format)
                kwargs["updated_at"] = datetime.strptime(kwargs["updated_at"],
                                                         time_format)
            except KeyError:
                self.id = str(uuid.uuid4())
                self.created_at = datetime.now()
                self.updated_at = datetime.now()
            for key, val in kwargs.items():
                if "__class__" not in key:
                    setattr(self, key, val)

    def __str__(self):
        """
            Return string representation of BaseModel class
        """
        return ("[{}] ({}) {}".format(self.__class__.__name__,
                                      self.id, self.__dict__))

    def __repr__(self):
        """
            Return string representation of BaseModel class
        """
        return ("[{}] ({}) {}".format(self.__class__.__name__,
                                      self.id, self.__dict__))

    def save(self):
        """
            Update the updated_at attribute with new.
        """
        self.updated_at = datetime.now()
        models.storage.new(self)
        models.storage.save()

    def to_dict(self):
        """
            Return dictionary representation of BaseModel class.
        """
        copy_dict = dict(self.__dict__)
        try:
            del copy_dict['_sa_instance_state']
        except KeyError:
            pass
        copy_dict['__class__'] = self.__class__.__name__
        copy_dict['updated_at'] = self.updated_at.strftime(
            "%Y-%m-%dT%H:%M:%S.%f")
        copy_dict['created_at'] = self.created_at.strftime(
            "%Y-%m-%dT%H:%M:%S.%f")

        return (copy_dict)

    def delete(self):
        """
            Deletes the current instance from the storage
                by calling the method delete.
        """
        models.storage.delete(self)
