import os
from fastapi import FastAPI
from pydantic import BaseModel

PORT = int(os.getenv("PORT", "8080"))
app = FastAPI(title="org-telecom-retention-zip-python")


class RetentionReviewRequest(BaseModel):
    customer_id: str
    recent_complaints: int
    days_to_contract_end: int
    usage_drop_percent: float = 0.0


@app.get('/health')
def health():
    return {"ok": True, "service": "org-telecom-retention-zip-python"}


@app.post('/retention/review')
def review(request: RetentionReviewRequest):
    if request.recent_complaints >= 2 or request.usage_drop_percent >= 40:
        lane = 'save-desk'
        action = 'Route to retention specialist with offer review.'
    elif request.days_to_contract_end <= 15:
        lane = 'renewal-priority'
        action = 'Assign to proactive renewal queue.'
    else:
        lane = 'monitor'
        action = 'Continue standard care and monitor behavior.'
    return {
        'ok': True,
        'customer_id': request.customer_id,
        'retention_lane': lane,
        'recommended_action': action,
    }


if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=PORT)
