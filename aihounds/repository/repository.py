from pymongo import MongoClient
from bson.objectid import ObjectId
from pydantic import BaseModel
from typing import Optional, Type, TypeVar, Any, Dict

T = TypeVar("T", bound=BaseModel)


class MongoDBClient:
    def __init__(self, database_url: str, database_name: str):
        self.client = MongoClient(database_url)
        self.db = self.client[database_name]

    def _get_collection(self, collection_name: str):
        return self.db[collection_name]

    def create(self, collection_name: str, model: T) -> str:
        collection = self._get_collection(collection_name)
        model_dict = model.model_dump(exclude_none=True)
        result = collection.insert_one(model_dict)
        return str(result.inserted_id)

    def read(self, collection_name: str, document_id: str) -> Optional[Dict[str, Any]]:
        collection = self._get_collection(collection_name)
        document = collection.find_one({"_id": ObjectId(document_id)})
        if document:
            document["_id"] = str(document["_id"]) 
        return document

    def update(self, collection_name: str, document_id: str, update_data: Dict[str, Any]) -> bool:
        collection = self._get_collection(collection_name)
        result = collection.update_one(
            {"_id": ObjectId(document_id)},
            {"$set": update_data}
        )
        return result.modified_count > 0

    def delete(self, collection_name: str, document_id: str) -> bool:
        collection = self._get_collection(collection_name)
        result = collection.delete_one({"_id": ObjectId(document_id)})
        return result.deleted_count > 0