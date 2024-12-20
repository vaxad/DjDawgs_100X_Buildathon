from typing import List
from pydantic import BaseModel


class KanbanRequest(BaseModel):
    id: str
    
class Task(BaseModel):
    status: str
    task: str

class KanbanBoard(BaseModel):
    tasks: List[Task]
    
class KanbanBoardMongo(BaseModel):
    id: str
    tasks: List[Task]
    
class KanBanBoardAggregate(BaseModel):
    id: str
    kanban_str: str