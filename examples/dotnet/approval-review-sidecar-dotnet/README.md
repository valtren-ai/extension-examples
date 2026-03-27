# approval-review-sidecar-dotnet

Medium-complexity .NET sidecar example for Valtren AI.

## What it demonstrates

- `/health` for runtime checks
- `/approval/review` for approval-routing logic
- a simple ASP.NET Core shape that enterprise .NET teams can extend quickly

## Local run

```bash
cd examples/dotnet/approval-review-sidecar-dotnet
dotnet run
```

## Example request

```bash
curl -X POST http://localhost:5000/approval/review \
  -H 'Content-Type: application/json' \
  -d '{"requestId":"apr-1001","riskLevel":"high","summary":"Write-back changes 3 listing fields."}'
```
