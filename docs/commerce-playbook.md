# Commerce Extension Playbook

This guide helps commerce and marketplace teams choose the right Valtren AI extension model and the best sample to start from.

It is written for teams such as:

- catalog operations leads
- listing quality managers
- approval reviewers
- marketplace analysts
- pricing and buy-box operators

## Which runtime should I choose?

### Choose a Node pack when

Use an in-process Node extension when the value is mostly:

- workflow orchestration
- approvals
- agent templates
- extension-native next-step preparation

Start with:

- `examples/node/approval-gate-pack`

### Choose an org ZIP extension when

Use an org ZIP extension when the commerce team wants a fast org-owned proof of concept directly from the Valtren UI.

Start with:

- `examples/node/org-hello-world-zip-node`
- `examples/python/org-hello-world-zip-python`

### Choose a sidecar when

Use a sidecar when the logic is heavier or domain-specific, for example:

- listing scoring
- recommendation generation
- pricing logic
- buy-box diagnostics

Start with:

- Python: `examples/python/listing-audit-sidecar-python`
- Java: `examples/java/listing-health-sidecar-java`
- .NET: `examples/dotnet/listing-ops-sidecar-dotnet`

## Common commerce use cases

### Catalog operations lead

Best starting examples:

- `examples/node/approval-gate-pack`
- `examples/dotnet/listing-ops-sidecar-dotnet`

### Listing quality manager

Best starting examples:

- `examples/python/listing-audit-sidecar-python`
- `examples/java/listing-health-sidecar-java`

### Pricing / buy-box operator

Best starting examples:

- `examples/node/approval-gate-pack`
- then evolve toward a dedicated pricing or buy-box sidecar

## Quick mapping table

| Role / team | Best starting example | Best runtime choice |
| --- | --- | --- |
| Catalog operations lead | `examples/node/approval-gate-pack` | Node pack |
| Listing quality manager | `examples/python/listing-audit-sidecar-python` | Python sidecar |
| Marketplace analyst | `examples/java/listing-health-sidecar-java` | Java sidecar |
| Pricing / buy-box operator | `examples/dotnet/listing-ops-sidecar-dotnet` or Node workflow pack | Sidecar or Node pack |
| Org-owned proof of concept | `examples/node/org-hello-world-zip-node` or `examples/python/org-hello-world-zip-python` | Org ZIP |
