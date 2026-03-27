import os
from fastapi import FastAPI
from pydantic import BaseModel

PORT = int(os.getenv("PORT", "8080"))
app = FastAPI(title="org-collections-zip-python")


class CollectionsReviewRequest(BaseModel):
    borrower_id: str
    days_past_due: int
    missed_promises_to_pay: int = 0


@app.get('/health')
def health():
    return {"ok": True, "service": "org-collections-zip-python"}


@app.post('/collections/review')
def review(request: CollectionsReviewRequest):
    if request.days_past_due >= 30 or request.missed_promises_to_pay >= 2:
        lane = 'field-follow-up'
        action = 'Route to high-touch collections review.'
    elif request.days_past_due >= 7:
        lane = 'agent-callback'
        action = 'Assign to agent callback queue.'
    else:
        lane = 'digital-reminder'
        action = 'Continue digital reminder sequence.'
    return {
        'ok': True,
        'borrower_id': request.borrower_id,
        'collections_lane': lane,
        'recommended_action': action,
    }


if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=PORT)
