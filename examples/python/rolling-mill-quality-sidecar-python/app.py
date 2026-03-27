import os
from fastapi import FastAPI
from pydantic import BaseModel

PORT = int(os.getenv("PORT", "8080"))
app = FastAPI(title="rolling-mill-quality-sidecar-python")


class CoilQualityRequest(BaseModel):
    heat_id: str
    width_variance_mm: float
    thickness_variance_mm: float
    surface_defect_count: int


@app.get("/health")
def health():
    return {"ok": True, "service": "rolling-mill-quality-sidecar-python"}


@app.post("/quality/score")
def score_quality(request: CoilQualityRequest):
    score = 100
    issues = []
    if abs(request.width_variance_mm) > 1.5:
        score -= 20
        issues.append("Width drift exceeds normal tolerance.")
    if abs(request.thickness_variance_mm) > 0.25:
        score -= 30
        issues.append("Thickness drift indicates setup or stand pressure instability.")
    if request.surface_defect_count > 3:
        score -= 25
        issues.append("Surface defects suggest inspection and roll-condition follow-up.")
    score = max(score, 10)
    return {
        "ok": True,
        "heat_id": request.heat_id,
        "quality_score": score,
        "severity": "high" if score < 55 else "medium" if score < 80 else "low",
        "recommended_actions": issues or ["Continue normal monitoring."],
    }


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=PORT)
