# hello-world-sidecar-python

Minimal Python sidecar extension for Valtren AI.

## What it demonstrates

- `/health` endpoint
- `/hooks/{hookName}` control-plane contract
- token-based sidecar authorization

This is the best first polyglot example for teams that want to build domain logic in Python instead of Node.

## Local run

```bash
cd examples/python/hello-world-sidecar-python
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
export TOKEN_HEADER=x-valtren-extension-token
export TOKEN=replace-with-shared-secret
python3 app.py
```

## Example sidecar runtime config

```json
{
  "sidecars": [
    {
      "name": "hello-world-python",
      "base_url": "http://localhost:8081",
      "auth_header": "x-valtren-extension-token",
      "timeout_ms": 8000,
      "hooks": ["onStartup", "onShutdown"]
    }
  ]
}
```

## Expected result

- `GET /health` returns OK
- `POST /hooks/onStartup` returns the hook payload
- Valtren AI can test the sidecar from `Admin -> Platform -> Extensions -> Test Sidecars`
