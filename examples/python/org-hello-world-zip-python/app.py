import os
from fastapi import FastAPI, Header, HTTPException

TOKEN_HEADER = os.getenv("TOKEN_HEADER", "x-valtren-extension-token")
TOKEN = os.getenv("TOKEN", "")
PORT = int(os.getenv("PORT", "8083"))

app = FastAPI(title="org-hello-world-zip-python")


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
    return {
        "ok": True,
        "service": "org-hello-world-zip-python",
        "message": "Hello from an org-uploaded Python extension."
    }


@app.get("/ping")
def ping(x_valtren_extension_token: str | None = Header(default=None)):
    require_token({TOKEN_HEADER.lower(): x_valtren_extension_token or ""})
    return {
        "ok": True,
        "extension": "org-hello-world-zip-python",
        "message": "The org-level Python ZIP extension is running."
    }


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=PORT)
