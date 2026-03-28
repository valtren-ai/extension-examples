# Partner Integration Playbook

This guide helps integration and operations teams choose the right Valtren AI extension model for external-system workflows.

It is written for teams such as:

- payment operations leads
- connector and platform reliability teams
- telecom or logistics integration teams
- bank or lender integration teams
- reconciliation and settlement teams

## Which runtime should I choose?

## Architecture pattern

```mermaid
flowchart LR
  A["Partner system events"] --> B["Valtren workflow or sidecar"]
  B --> C["Ops review or auto-routing"]
  C --> D["Recovery action"]
  D --> E["Connector health verification"]
```

### Choose a Node pack when

Use an in-process Node extension when the value is mostly:

- workflow orchestration
- approvals and exception routing
- partner-facing recovery playbooks
- starter agents for operator-driven resolution loops

Start with:

- `examples/node/payment-gateway-reconciliation-pack`

### Choose an org ZIP extension when

Use an org ZIP extension when a customer wants a fast, owned proof of concept through the Valtren UI.

Start with:

- `examples/node/org-claims-triage-zip-node`
- `examples/python/org-telecom-retention-zip-python`

### Choose a sidecar when

Use a sidecar when the integration logic is domain-heavy or long-lived, such as:

- connector health scoring
- bank or gateway API analysis
- carrier SLA breach detection
- reconciliation analytics

Start with:

- Python: `examples/python/bank-connector-health-sidecar-python`
- .NET: `examples/dotnet/carrier-api-ops-sidecar-dotnet`

## Common partner-integration use cases

### Payment operations lead

Best starting examples:

- `examples/node/payment-gateway-reconciliation-pack`
- `examples/python/bank-connector-health-sidecar-python`

### Connector reliability team

Best starting example:

- `examples/python/bank-connector-health-sidecar-python`

### Carrier or partner API operations team

Best starting example:

- `examples/dotnet/carrier-api-ops-sidecar-dotnet`

## Quick mapping table

| Role / team | Best starting example | Best runtime choice |
| --- | --- | --- |
| Payment operations lead | `examples/node/payment-gateway-reconciliation-pack` | Node pack |
| Connector reliability team | `examples/python/bank-connector-health-sidecar-python` | Python sidecar |
| Carrier / partner API operations | `examples/dotnet/carrier-api-ops-sidecar-dotnet` | .NET sidecar |
| Customer-owned proof of concept | existing org ZIP examples | Org ZIP |
