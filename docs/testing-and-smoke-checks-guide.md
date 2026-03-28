# Testing and Smoke-Checks Guide

This guide gives copy-paste validation steps for the main Valtren AI extension models.

## What to test first

Every extension should answer these questions before wider rollout:

- does the package load?
- does the health or smoke endpoint work?
- does the expected workflow, route, or sidecar behavior work?
- can the extension be disabled or rolled back safely?

## 1. In-process Node extension checks

Use this for examples like:

- `examples/node/hello-world-node`
- `examples/node/executor-pack-node`
- `examples/node/payment-gateway-reconciliation-pack`

### Basic local checks

Install dependencies if needed, then validate the module loads:

```bash
npm install
node --input-type=module -e "import('./examples/node/hello-world-node/index.js').then(() => console.log('ok'))"
```

### What to verify

- the module imports without error
- the manifest shape is valid
- workflow keys and template keys are named clearly
- any declared executor returns the expected structure

## 2. Org ZIP extension checks

Use this for examples like:

- `examples/node/org-hello-world-zip-node`
- `examples/python/org-hello-world-zip-python`
- `examples/node/org-credit-ops-zip-node`
- `examples/python/org-collections-zip-python`

### Prepare the ZIP

Zip the contents of the folder, not the folder itself.

#### Node org ZIP

```bash
cd examples/node/org-credit-ops-zip-node
zip -rq /tmp/org-credit-ops-zip-node.zip .
```

#### Python org ZIP

```bash
cd examples/python/org-collections-zip-python
zip -rq /tmp/org-collections-zip-python.zip .
```

### Upload and validate

In Valtren AI:

1. Go to `Admin -> Org Settings -> Extensions`
2. Upload the ZIP or import from GitHub
3. Review validation and declared capabilities
4. Approve the package
5. Enable it for the organization
6. Click `Test extension`

### What to verify

- the package passes validation
- the extension becomes `active` and `healthy`
- the smoke test returns `ok: true`
- disable and re-enable works cleanly

## 3. Python sidecar checks

Use this for examples like:

- `examples/python/loan-portfolio-risk-sidecar-python`
- `examples/python/bank-connector-health-sidecar-python`

### Syntax check

```bash
python3 -m py_compile app.py
```

### Install and run locally

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

### Health check

```bash
curl -sS http://localhost:8080/health
```

### Example endpoint check

```bash
curl -sS -X POST http://localhost:8080/connector/health \
  -H 'Content-Type: application/json' \
  --data '{"connector_name":"bank-api","error_rate_percent":6,"p95_latency_ms":3500,"timeout_count_1h":24}'
```

### What to verify

- `/health` returns `ok: true`
- the sample endpoint returns structured JSON
- the scoring or routing logic matches the README explanation

## 4. Java sidecar checks

Use this for examples like:

- `examples/java/listing-health-sidecar-java`
- `examples/java/collections-strategy-sidecar-java`

### Build

```bash
mvn clean package
```

### Run

```bash
mvn spring-boot:run
```

### Health check

```bash
curl -sS http://localhost:8080/health
```

### What to verify

- the service starts cleanly
- `/health` responds successfully
- the example endpoint returns the expected routing or scoring output

## 5. .NET sidecar checks

Use this for examples like:

- `examples/dotnet/approval-review-sidecar-dotnet`
- `examples/dotnet/carrier-api-ops-sidecar-dotnet`

### Build

```bash
dotnet build
```

### Run

```bash
dotnet run
```

### Health check

```bash
curl -sS http://localhost:5000/health
```

If the local port differs, use the port printed by ASP.NET Core on startup.

### What to verify

- the service builds and starts cleanly
- `/health` returns `ok: true`
- the example endpoint returns structured JSON for the sample request

## 6. Upgrade smoke check

When changing an existing extension, validate:

- the new version loads
- the old version can still be restored if needed
- the health endpoint still works
- the key workflow, route, or endpoint contract has not changed unexpectedly

## 7. Disable and rollback check

Before calling an extension production-ready, confirm:

- it can be disabled cleanly
- its dependent routes or behavior stop as expected
- the previous known-good version or artifact is still available

## 8. Minimum release gate

A practical minimum release gate for most teams is:

- import or build succeeds
- health check passes
- one representative endpoint or workflow test passes
- rollback artifact is available
- README is up to date

The goal is not a huge test matrix on day one. The goal is to prove that the extension loads, behaves as documented, and can be rolled back safely.
