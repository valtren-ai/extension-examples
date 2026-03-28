# Valtren AI Extension Examples

[![npm version](https://img.shields.io/npm/v/%40valtren-ai%2Fextension-sdk)](https://www.npmjs.com/package/@valtren-ai/extension-sdk)
[![Publish SDK](https://github.com/valtren-ai/extension-sdk/actions/workflows/publish.yml/badge.svg)](https://github.com/valtren-ai/extension-sdk/actions/workflows/publish.yml)

Official sample extensions for Valtren AI, from hello world to medium-complexity domain packs.

Published SDK:

- [`@valtren-ai/extension-sdk@0.1.0`](https://www.npmjs.com/package/@valtren-ai/extension-sdk)

## Why this repo exists

This repository helps extension authors learn how to build on top of Valtren AI without modifying the core runtime.

It is designed for three kinds of teams:

- platform teams building in-process Node extensions
- product teams shipping org-owned ZIP extensions
- domain teams that prefer sidecars in Python, Java, or .NET

## Extension models in plain language

### 1. In-process Node extensions

Use these when you want the easiest authoring path and tight integration with the Valtren runtime.

Best for:

- custom steps and executors
- starter templates and workflow packs
- platform-installed extensions
- org-installed Node ZIP extensions

### 2. Org ZIP extensions

Use these when an organization wants to upload and own its extension package directly from the Valtren UI.

Best for:

- self-contained Node ZIP packages
- self-contained Python ZIP packages
- customer-owned extension IP
- quick proof-of-concept extensions

### 3. Polyglot sidecars

Use these when your team prefers Python, Java, or .NET, or when you want runtime isolation for domain logic.

Best for:

- enterprise integration logic
- scoring and optimization services
- ML or analytics endpoints
- approval or review services

## Repository layout

```text
examples/
  node/
    hello-world-node/
    org-hello-world-zip-node/
    org-credit-ops-zip-node/
    org-claims-triage-zip-node/
    payment-gateway-reconciliation-pack/
    catalog-only-agent-pack/
    executor-pack-node/
    approval-gate-pack/
    steel-plant-ops-pack/
    digital-lending-ops-pack/
  python/
    hello-world-sidecar-python/
    org-hello-world-zip-python/
    org-collections-zip-python/
    org-telecom-retention-zip-python/
    bank-connector-health-sidecar-python/
    listing-audit-sidecar-python/
    rolling-mill-quality-sidecar-python/
    loan-portfolio-risk-sidecar-python/
  java/
    hello-world-sidecar-java/
    approval-review-sidecar-java/
    listing-health-sidecar-java/
    furnace-energy-sidecar-java/
    collections-strategy-sidecar-java/
  dotnet/
    hello-world-sidecar-dotnet/
    listing-ops-sidecar-dotnet/
    approval-review-sidecar-dotnet/
    work-order-risk-sidecar-dotnet/
    borrower-eligibility-sidecar-dotnet/
```

## Which example should I start with?

| If you want to... | Start here | Why |
| --- | --- | --- |
| Build your first Valtren extension ever | `examples/node/hello-world-node` | Smallest in-process example |
| Upload a Node extension from Org Settings | `examples/node/org-hello-world-zip-node` | Best first org ZIP Node example |
| Start a banking or credit-ops Node proof of concept | `examples/node/org-credit-ops-zip-node` | Customer-owned org ZIP for credit review flows |
| Start an insurance claims proof of concept | `examples/node/org-claims-triage-zip-node` | Customer-owned org ZIP for claims triage |
| Upload a Python extension from Org Settings | `examples/python/org-hello-world-zip-python` | Best first org ZIP Python example |
| Start a collections-focused Python proof of concept | `examples/python/org-collections-zip-python` | Customer-owned org ZIP for simple collections routing |
| Start a telecom retention proof of concept | `examples/python/org-telecom-retention-zip-python` | Customer-owned org ZIP for churn and renewal routing |
| Add workflows and templates only | `examples/node/catalog-only-agent-pack` | No executor complexity yet |
| Add a Node step executor | `examples/node/executor-pack-node` | Best runtime execution example |
| Learn a medium Node pack | `examples/node/approval-gate-pack` | Shows governed workflow behavior |
| Build a minimal Python sidecar | `examples/python/hello-world-sidecar-python` | Smallest polyglot path |
| Build a medium Python sidecar | `examples/python/listing-audit-sidecar-python` | Domain scoring example |
| Start with Java | `examples/java/hello-world-sidecar-java` | Smallest JVM example |
| Build a medium Java sidecar | `examples/java/listing-health-sidecar-java` | Useful domain scoring example |
| Start with .NET | `examples/dotnet/hello-world-sidecar-dotnet` | Smallest ASP.NET Core example |
| Build a medium .NET sidecar | `examples/dotnet/approval-review-sidecar-dotnet` | Useful approval-routing example |
| Start a payment or partner integration workflow | `examples/node/payment-gateway-reconciliation-pack` | Good first Node pack for reconciliation and exception routing |
| Start a connector-health sidecar | `examples/python/bank-connector-health-sidecar-python` | Good first Python sidecar for partner health scoring |
| Start a carrier or partner API ops sidecar | `examples/dotnet/carrier-api-ops-sidecar-dotnet` | Good first .NET sidecar for external API operations |
| Explore manufacturing / steel scenarios | see the manufacturing examples below | Realistic plant operations use cases |
| Explore micro-finance / digital lending scenarios | see the micro-finance examples below | Borrower risk, collections, and eligibility use cases |

## Partner integration-focused examples

These are intentionally shaped around external-system operations so teams can see how Valtren AI extensions support reconciliation, connector health, and partner API reliability work.

### Node

- `examples/node/payment-gateway-reconciliation-pack`
  - workflow pack for payment gateway reconciliation and exception handling
  - good for payment operations and settlement review

### Python

- `examples/python/bank-connector-health-sidecar-python`
  - sidecar for connector health scoring and degradation review
  - good for bank, gateway, and partner API reliability teams

### .NET

- `examples/dotnet/carrier-api-ops-sidecar-dotnet`
  - sidecar for carrier or partner API routing and escalation
  - good for telecom or logistics integration teams

## Manufacturing-focused examples

These are intentionally shaped around plant and steel-manufacturing scenarios so teams like Jindal Steel can see how Valtren AI extensions map to real work.

### Node

- `examples/node/steel-plant-ops-pack`
  - in-process workflow pack for steel plant interventions
  - good for shift-supervisor and approval-gated intervention loops

### Python

- `examples/python/rolling-mill-quality-sidecar-python`
  - sidecar for rolling-mill quality scoring
  - good for width/thickness drift and surface defect review

### Java

- `examples/java/furnace-energy-sidecar-java`
  - sidecar for furnace energy deviation analysis
  - good for utilities, process, or energy teams

### .NET

- `examples/dotnet/work-order-risk-sidecar-dotnet`
  - sidecar for maintenance work-order risk scoring
  - good for planning, reliability, and operations teams


## Banking / collections-focused examples

These are intentionally shaped around credit operations, collections, and servicing workflows so banks, lenders, and embedded-finance teams can see how Valtren AI extensions map to real work.

### Node

- `examples/node/org-credit-ops-zip-node`
  - org ZIP example for borrower review and servicing recommendations
  - good for bank or lender-owned proof-of-concept workflows

### Python

- `examples/python/org-collections-zip-python`
  - org ZIP example for collections lane routing
  - good for servicing and recovery teams

## Insurance / telecom org ZIP examples

These are intentionally shaped around customer-owned proof-of-concept workflows for insurers and telecom operators that want to move quickly through org ZIP installation.

### Node

- `examples/node/org-claims-triage-zip-node`
  - org ZIP example for insurance claims triage
  - good for manual-review and exception-routing workflows

### Python

- `examples/python/org-telecom-retention-zip-python`
  - org ZIP example for telecom renewal and churn-retention routing
  - good for save-desk and renewal-priority workflows

## Micro-finance-focused examples

These are intentionally shaped around digital lending, borrower operations, and financial-inclusion scenarios so teams like Yabx or Furaha Financials can see how Valtren AI extensions map to real work.

### Node

- `examples/node/digital-lending-ops-pack`
  - workflow pack for borrower review and intervention approvals
  - good for servicing, portfolio-risk, and collections-adjacent orchestration

### Python

- `examples/python/loan-portfolio-risk-sidecar-python`
  - sidecar for delinquency and utilization-based borrower risk scoring
  - good for portfolio monitoring and early collections prioritization

### Java

- `examples/java/collections-strategy-sidecar-java`
  - sidecar for routing borrowers into collections strategy lanes
  - good for servicing and collections operations

### .NET

- `examples/dotnet/borrower-eligibility-sidecar-dotnet`
  - sidecar for borrower eligibility and manual-review routing
  - good for underwriting and lending operations teams

## Included examples

### Node examples

- `hello-world-node`
  - Minimal in-process extension
  - Demonstrates manifest shape and route registration

- `org-hello-world-zip-node`
  - Minimal Node example shaped for `Admin -> Org Settings -> Extensions -> Upload ZIP`
  - Demonstrates the org-owned ZIP upload path for Node

- `org-credit-ops-zip-node`
  - Banking-focused Node org ZIP example
  - Demonstrates a customer-owned credit-review proof of concept

- `org-claims-triage-zip-node`
  - Insurance-focused Node org ZIP example
  - Demonstrates simple claims triage for customer-owned proof-of-concept flows

- `catalog-only-agent-pack`
  - Demonstrates `agent_catalog`
  - Adds custom steps, workflows, and starter templates
  - No custom executor yet

- `executor-pack-node`
  - Demonstrates `step_executors`
  - Adds an extension-native step that produces workflow state

- `approval-gate-pack`
  - Medium-complexity in-process extension
  - Demonstrates a governed workflow plus an approval-aware executor

- `payment-gateway-reconciliation-pack`
  - Partner integration-focused Node pack
  - Demonstrates reconciliation workflows and next-step preparation

- `steel-plant-ops-pack`
  - Manufacturing-focused workflow pack
  - Demonstrates how to shape a starter agent for steel plant interventions and approvals

- `digital-lending-ops-pack`
  - Micro-finance-focused workflow pack
  - Demonstrates how to shape a starter agent for borrower review and intervention workflows

### Python examples

- `hello-world-sidecar-python`
  - Minimal Python sidecar
  - Demonstrates `/health` and `/hooks/{hookName}`

- `org-hello-world-zip-python`
  - Minimal Python example shaped for org ZIP upload
  - Best first example for org-level Python enablement

- `org-collections-zip-python`
  - Banking-focused Python org ZIP example
  - Demonstrates simple collections routing for customer-owned proof-of-concept flows

- `org-telecom-retention-zip-python`
  - Telecom-focused Python org ZIP example
  - Demonstrates simple retention routing for customer-owned proof-of-concept flows

- `listing-audit-sidecar-python`
  - Medium-complexity Python sidecar
  - Demonstrates a domain endpoint and simple listing-health scoring

- `rolling-mill-quality-sidecar-python`
  - Manufacturing-focused Python sidecar
  - Demonstrates steel quality scoring with tolerance-style inputs

- `loan-portfolio-risk-sidecar-python`
  - Micro-finance-focused Python sidecar
  - Demonstrates borrower and portfolio risk scoring

- `bank-connector-health-sidecar-python`
  - Partner integration-focused Python sidecar
  - Demonstrates connector health scoring and degradation analysis

### Java examples

- `hello-world-sidecar-java`
  - Minimal Spring Boot sidecar

- `approval-review-sidecar-java`
  - Medium Java sidecar for approval-oriented logic

- `listing-health-sidecar-java`
  - Medium Java sidecar for scoring or QA-style listing analysis

- `furnace-energy-sidecar-java`
  - Manufacturing-focused Java sidecar
  - Demonstrates energy deviation analysis for furnace-style operations

- `collections-strategy-sidecar-java`
  - Micro-finance-focused Java sidecar
  - Demonstrates collections strategy routing

### .NET examples

- `hello-world-sidecar-dotnet`
  - Minimal ASP.NET Core sidecar

- `listing-ops-sidecar-dotnet`
  - Medium .NET sidecar for listing recommendations

- `approval-review-sidecar-dotnet`
  - Medium .NET sidecar for approval-routing decisions

- `work-order-risk-sidecar-dotnet`
  - Manufacturing-focused .NET sidecar
  - Demonstrates maintenance work-order risk scoring

- `borrower-eligibility-sidecar-dotnet`
  - Micro-finance-focused .NET sidecar
  - Demonstrates borrower eligibility checks

- `carrier-api-ops-sidecar-dotnet`
  - Partner integration-focused .NET sidecar
  - Demonstrates carrier or partner API operations routing

## How these examples fit into Valtren AI

Valtren AI core owns:

- workflow execution
- approvals
- queueing
- observability
- licensing
- governance

Extensions contribute:

- step definitions
- workflow definitions
- starter templates
- custom executor logic
- sidecar logic in external runtimes

## Install paths

For SDK-backed Node examples, install the shared package first:

```bash
npm install @valtren-ai/extension-sdk@^0.1.0
```

The package is live on npm:

- [npmjs.com/package/@valtren-ai/extension-sdk](https://www.npmjs.com/package/@valtren-ai/extension-sdk)

### Platform-installed Node extensions

Use this path for in-process runtime extensions:

```text
server/extensions/<extension-name>/index.js
```

Then reload from:

`Admin -> Platform -> Extensions -> Reload Extensions`

### Org ZIP extensions

Use this path when an org admin uploads the extension package from the UI.

Current best starting points:

- `examples/node/org-hello-world-zip-node`
- `examples/python/org-hello-world-zip-python`

Then upload from:

`Admin -> Org Settings -> Extensions`

### Sidecar extensions

Use this path when your service runs outside the Valtren core runtime.

Typical flow:

1. run the sidecar locally or deploy it
2. expose `/health`
3. expose one or more domain endpoints
4. register or connect it through Valtren sidecar runtime configuration

## Recommended learning path

1. Start with `examples/node/hello-world-node`
2. If you want org-owned upload, try `examples/node/org-hello-world-zip-node` or `examples/python/org-hello-world-zip-python`
3. Move to `examples/node/catalog-only-agent-pack`
4. Then study `examples/node/executor-pack-node`
5. Review `examples/node/approval-gate-pack`
6. Explore the manufacturing examples if your domain is plant operations, quality, maintenance, or energy
7. Move into Python, Java, or .NET sidecars for domain-specific logic

## Guides

- [Build your first extension](./docs/build-your-first-extension.md)
- [Versioning and upgrade guide](./docs/versioning-and-upgrade-guide.md)
- [Testing and smoke-checks guide](./docs/testing-and-smoke-checks-guide.md)
- [Security and capability review guide](./docs/security-and-capability-review-guide.md)
- [Commerce extension playbook](./docs/commerce-playbook.md)
- [Banking, collections, and credit operations playbook](./docs/banking-playbook.md)
- [Partner integration playbook](./docs/partner-integration-playbook.md)
- [Manufacturing extension playbook](./docs/manufacturing-playbook.md)
- [Micro-finance extension playbook](./docs/microfinance-playbook.md)

## Related repositories

- `valtren-ai/core`
  - Licensed Valtren AI core platform

- `valtren-ai/extension-sdk`
  - Shared types, validators, and helpers for extension authors

## License

MIT
