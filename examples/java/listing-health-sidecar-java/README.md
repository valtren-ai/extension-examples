# listing-health-sidecar-java

Medium-complexity Java sidecar example for Valtren AI.

## What it demonstrates

- `/health` for runtime checks
- `/listing/score` for a lightweight listing-health scoring endpoint
- a realistic Spring Boot starting point for enterprise Java teams

## Why this example is useful

Choose this example when your team already ships JVM services and wants to keep custom listing logic outside the Valtren core runtime.

## Local run

```bash
cd examples/java/listing-health-sidecar-java
mvn spring-boot:run
```

## Example request

```bash
curl -X POST http://localhost:8080/listing/score \
  -H 'Content-Type: application/json' \
  -d '{"asin":"B0TEST123","imageCount":2,"bulletCount":3,"titleLength":196}'
```
