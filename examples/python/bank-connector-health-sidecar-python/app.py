import os
from fastapi import FastAPI
from pydantic import BaseModel

PORT = int(os.getenv("PORT", "8080"))
app = FastAPI(title="bank-connector-health-sidecar-python")


class ConnectorHealthRequest(BaseModel):
    connector_name: str
    error_rate_percent: float
    p95_latency_ms: int
    timeout_count_1h: int


@app.get('/health')
def health():
    return {"ok": True, "service": "bank-connector-health-sidecar-python"}


@app.post('/connector/health')
def review(request: ConnectorHealthRequest):
    score = 100
    notes = []
    if request.error_rate_percent >= 5:
        score -= 35
        notes.append("High error rate detected.")
    if request.p95_latency_ms >= 3000:
        score -= 25
        notes.append("Connector latency is elevated.")
    if request.timeout_count_1h >= 20:
        score -= 25
        notes.append("Timeout volume is above threshold.")
    score = max(score, 10)
    return {
        'ok': True,
        'connector_name': request.connector_name,
        'health_score': score,
        'health_band': 'critical' if score < 40 else 'degraded' if score < 70 else 'healthy',
        'recommended_actions': notes or ['Continue normal monitoring.'],
    }


if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=PORT)
