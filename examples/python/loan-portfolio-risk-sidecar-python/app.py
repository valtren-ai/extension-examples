import os
from fastapi import FastAPI
from pydantic import BaseModel

PORT = int(os.getenv("PORT", "8080"))
app = FastAPI(title="loan-portfolio-risk-sidecar-python")


class PortfolioRiskRequest(BaseModel):
    borrower_id: str
    days_past_due: int
    utilization_ratio: float
    missed_payments_90d: int


@app.get("/health")
def health():
    return {"ok": True, "service": "loan-portfolio-risk-sidecar-python"}


@app.post("/portfolio/risk")
def risk(request: PortfolioRiskRequest):
    score = 100
    notes = []
    if request.days_past_due >= 30:
        score -= 35
        notes.append("Borrower is 30+ days past due.")
    elif request.days_past_due >= 7:
        score -= 20
        notes.append("Borrower has entered early delinquency.")
    if request.utilization_ratio > 0.9:
        score -= 20
        notes.append("High utilization may indicate repayment stress.")
    if request.missed_payments_90d >= 2:
        score -= 25
        notes.append("Repeated missed payments in the last 90 days.")
    score = max(score, 10)
    return {
        "ok": True,
        "borrower_id": request.borrower_id,
        "portfolio_risk_score": score,
        "risk_band": "high" if score < 50 else "medium" if score < 75 else "low",
        "recommended_actions": notes or ["Continue standard servicing."],
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=PORT)
