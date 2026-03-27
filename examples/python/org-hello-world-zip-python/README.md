# org-hello-world-zip-python

Minimal Python example specifically shaped for Valtren AI's org ZIP upload flow.

## Why this example exists

This sample is intentionally simple:

- `app.py` is at the ZIP root
- `requirements.txt` is at the ZIP root
- it exposes `/health` for Valtren's org extension smoke test
- it exposes `/ping` as a tiny domain endpoint

This is the best first example for testing:

- `Admin -> Org Settings -> Extensions -> Upload ZIP`
- review / approve / enable
- `Test extension`

## Create the ZIP

Zip the contents of this folder, not the parent folder itself.

```bash
cd examples/python/org-hello-world-zip-python
zip -rq /tmp/org-hello-world-zip-python.zip .
```

## Local run

```bash
cd examples/python/org-hello-world-zip-python
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
export TOKEN_HEADER=x-valtren-extension-token
export TOKEN=replace-with-shared-secret
python3 app.py
```

## Expected result in Valtren AI

After upload and enablement:

- install status should show `active`
- health should show `healthy`
- `Test extension` should call `/health`
