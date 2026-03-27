# Banking, Collections, and Credit Operations Playbook

This guide helps banking, collections, and credit-operations teams choose the right Valtren AI extension model and the best sample to start from.

It is written for teams such as:

- credit operations leads
- collections managers
- portfolio monitoring teams
- underwriting and decisioning teams
- servicing and recovery operations teams

## Which runtime should I choose?

### Choose a Node pack when

Use an in-process Node extension when the value is mostly:

- workflow orchestration
- approval routing
- exception handling
- reusable starter agents for credit or servicing operations

Start with:

- `examples/node/digital-lending-ops-pack`

### Choose an org ZIP extension when

Use an org ZIP extension when a bank, lender, or fintech wants a fast customer-owned proof of concept from the Valtren UI.

Start with:

- `examples/node/org-credit-ops-zip-node`
- `examples/python/org-collections-zip-python`

### Choose a sidecar when

Use a sidecar when the logic is domain-heavy, such as:

- portfolio risk scoring
- collections lane routing
- eligibility checks
- credit policy analytics

Start with:

- Python: `examples/python/loan-portfolio-risk-sidecar-python`
- Java: `examples/java/collections-strategy-sidecar-java`
- .NET: `examples/dotnet/borrower-eligibility-sidecar-dotnet`

## Common banking and credit-operations use cases

### Credit operations lead

Best starting examples:

- `examples/node/digital-lending-ops-pack`
- `examples/node/org-credit-ops-zip-node`

### Collections manager

Best starting examples:

- `examples/python/org-collections-zip-python`
- `examples/java/collections-strategy-sidecar-java`

### Portfolio monitoring team

Best starting example:

- `examples/python/loan-portfolio-risk-sidecar-python`

### Underwriting or eligibility team

Best starting example:

- `examples/dotnet/borrower-eligibility-sidecar-dotnet`

## Quick mapping table

| Role / team | Best starting example | Best runtime choice |
| --- | --- | --- |
| Credit operations lead | `examples/node/org-credit-ops-zip-node` | Org ZIP |
| Collections manager | `examples/python/org-collections-zip-python` | Org ZIP or Python sidecar |
| Portfolio monitoring team | `examples/python/loan-portfolio-risk-sidecar-python` | Python sidecar |
| Underwriting / eligibility team | `examples/dotnet/borrower-eligibility-sidecar-dotnet` | .NET sidecar |
| Approval-heavy servicing team | `examples/node/digital-lending-ops-pack` | Node pack |
