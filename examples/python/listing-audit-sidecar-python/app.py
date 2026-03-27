import os
from fastapi import FastAPI, Header, HTTPException
from pydantic import BaseModel

TOKEN_HEADER = os.getenv("TOKEN_HEADER", "x-valtren-extension-token")
TOKEN = os.getenv("TOKEN", "")
PORT = int(os.getenv("PORT", "8082"))

app = FastAPI(title="listing-audit-sidecar-python")

class AuditRequest(BaseModel):
    asin: str
    title: str | None = None
    bullet_count: int = 0
    image_count: int = 0


def require_token(headers: dict):
    expected = TOKEN.strip()
    if not expected:
        return
    actual = headers.get(TOKEN_HEADER.lower(), "")
    if actual != expected:
        raise HTTPException(status_code=401, detail="Missing or invalid sidecar token")


@app.get("/health")
def health(x_valtren_extension_token: str | None = Header(default=None)):
    require_token({TOKEN_HEADER.lower(): x_valtren_extension_token or ""})
    return {"ok": True, "service": "listing-audit-sidecar-python"}


@app.post("/audit")
def audit(request: AuditRequest, x_valtren_extension_token: str | None = Header(default=None)):
    require_token({TOKEN_HEADER.lower(): x_valtren_extension_token or ""})
    health_score = 100
    if request.bullet_count < 3:
        health_score -= 20
    if request.image_count < 4:
        health_score -= 25
    return {
        "ok": True,
        "asin": request.asin,
        "health_score": max(0, health_score),
        "recommendations": [
            "Increase bullet coverage to at least 5 bullets." if request.bullet_count < 3 else None,
            "Add more supporting images and a dimensions shot." if request.image_count < 4 else None,
        ],
    }


@app.post("/hooks/{hook_name}")
def hook(hook_name: str, payload: dict, x_valtren_extension_token: str | None = Header(default=None)):
    require_token({TOKEN_HEADER.lower(): x_valtren_extension_token or ""})
    return {"ok": True, "hook": hook_name, "received": payload}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=PORT)
