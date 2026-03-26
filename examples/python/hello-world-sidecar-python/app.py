#!/usr/bin/env python3
import os
from flask import Flask, jsonify, request

app = Flask(__name__)

TOKEN_HEADER = os.getenv("TOKEN_HEADER", "x-valtren-extension-token")
TOKEN = os.getenv("TOKEN", "")
PORT = int(os.getenv("PORT", "8081"))


def is_authorized(req):
    if not TOKEN:
        return True
    return req.headers.get(TOKEN_HEADER, "") == TOKEN


@app.get("/health")
def health():
    return jsonify({
        "ok": True,
        "sidecar": "hello-world-python",
    })


@app.post("/hooks/<hook_name>")
def hook(hook_name):
    if not is_authorized(request):
        return jsonify({"error": "Unauthorized"}), 401

    payload = request.get_json(silent=True) or {}
    return jsonify({
        "ok": True,
        "sidecar": "hello-world-python",
        "hook": hook_name,
        "received": payload,
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=PORT)
