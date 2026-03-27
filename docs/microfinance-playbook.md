# Micro-Finance Extension Playbook

This guide helps digital lending and micro-finance teams choose the right Valtren AI extension model and the best sample to start from.

It is written for teams such as:

- portfolio risk supervisors
- collections managers
- borrower operations leads
- underwriting / eligibility teams
- embedded finance operators

## Which runtime should I choose?

### Choose a Node pack when

Use an in-process Node extension when the value is mostly:

- borrower review workflows
- approvals
- intervention orchestration
- reusable starter agents for digital lending operations

Start with:

- `examples/node/digital-lending-ops-pack`

### Choose an org ZIP extension when

Use an org ZIP extension when a lender wants a small, customer-owned proof of concept from the Valtren UI.

Start with:

- `examples/node/org-hello-world-zip-node`
- `examples/python/org-hello-world-zip-python`

### Choose a sidecar when

Use a sidecar when the logic is domain-heavy, such as:

- borrower risk scoring
- collections strategy routing
- eligibility checks
- portfolio analytics

Start with:

- Python: `examples/python/loan-portfolio-risk-sidecar-python`
- Java: `examples/java/collections-strategy-sidecar-java`
- .NET: `examples/dotnet/borrower-eligibility-sidecar-dotnet`

## Common micro-finance use cases

### Portfolio risk supervisor

Best starting example:

- `examples/python/loan-portfolio-risk-sidecar-python`

### Collections manager

Best starting example:

- `examples/java/collections-strategy-sidecar-java`

### Borrower operations / servicing lead

Best starting example:

- `examples/node/digital-lending-ops-pack`

### Underwriting or eligibility team

Best starting example:

- `examples/dotnet/borrower-eligibility-sidecar-dotnet`

## Quick mapping table

| Role / team | Best starting example | Best runtime choice |
| --- | --- | --- |
| Portfolio risk supervisor | `examples/python/loan-portfolio-risk-sidecar-python` | Python sidecar |
| Collections manager | `examples/java/collections-strategy-sidecar-java` | Java sidecar |
| Borrower operations lead | `examples/node/digital-lending-ops-pack` | Node pack |
| Underwriting / eligibility team | `examples/dotnet/borrower-eligibility-sidecar-dotnet` | .NET sidecar |
| Org-owned proof of concept | `examples/node/org-hello-world-zip-node` or `examples/python/org-hello-world-zip-python` | Org ZIP |
