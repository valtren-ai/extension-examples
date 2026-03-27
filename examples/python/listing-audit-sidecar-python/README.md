# listing-audit-sidecar-python

Medium-complexity Python sidecar example for Valtren AI.

## What it demonstrates

- `/health` endpoint
- `/hooks/{hookName}` control-plane contract
- a domain endpoint (`/audit`) for listing-quality logic
- simple token-protected sidecar communication

## Local run

```bash
cd examples/python/listing-audit-sidecar-python
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
export TOKEN_HEADER=x-valtren-extension-token
export TOKEN=replace-with-shared-secret
python3 app.py
```

## Example request

```bash
curl -X POST http://localhost:8082/audit \
  -H 'Content-Type: application/json' \
  -H 'x-valtren-extension-token: replace-with-shared-secret' \
  -d '{"asin":"B0EXAMPLE123","bullet_count":2,"image_count":1}'
```
