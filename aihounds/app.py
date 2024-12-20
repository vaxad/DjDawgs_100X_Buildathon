from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from aihounds.endpoints import aggregate, kanban, keywords, marketsegment, mongodb, news, onboard, summary, trends, typeform, vote, youtube, marketresearch, email, product, report
from aihounds.endpoints.crunchbase import crunchbase_router 
from aihounds.endpoints.user import user_router
from aihounds.endpoints.agent import api_router
from aihounds.endpoints.outreach import outreach_router
from aihounds.endpoints.rivals import router as rivals_router
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

app.include_router(keywords.router)
app.include_router(onboard.router)
app.include_router(crunchbase_router)
app.include_router(youtube.router)
app.include_router(user_router)
app.include_router(marketresearch.router)
app.include_router(marketsegment.router)
app.include_router(api_router)
app.include_router(outreach_router)
app.include_router(trends.router)
app.include_router(mongodb.router)
app.include_router(email.router)
app.include_router(typeform.router)
app.include_router(kanban.router)
app.include_router(product.router)
app.include_router(report.router)
app.include_router(news.router)
app.include_router(vote.router)
app.include_router(aggregate.router)
app.include_router(rivals_router)
app.include_router(summary.router)

@app.get("/")
def root():
    return {"message": "Welcome to AIHound API"}