# Manufacturing Extension Playbook

This guide helps manufacturing teams choose the right Valtren AI extension model and the best sample to start from.

It is written for plants and industrial teams such as:

- shift supervisors
- quality heads
- maintenance planners
- energy managers
- reliability engineers
- plant digital / IT teams

## Start with the business problem, not the language

A good extension choice starts with the question:

- Does this need to run inside Valtren AI as a workflow/template pack?
- Does this need to be uploaded directly by an organization from the UI?
- Does this need to run as a separate domain service in Python, Java, or .NET?

Use the guidance below.

## Which runtime should I choose?

### Choose a Node pack when

Use an in-process Node extension when you want to extend Valtren AI itself with:

- workflow packs
- starter templates
- custom step executors
- approval-aware intervention logic
- lightweight platform-near domain logic

Best when:

- the logic is mostly orchestration
- you want the extension to appear in workflow/agent authoring quickly
- your team is comfortable with JavaScript/TypeScript

Start with:

- `examples/node/steel-plant-ops-pack`
- `examples/node/approval-gate-pack`

### Choose an org ZIP extension when

Use an org ZIP extension when the organization wants to own and upload the package directly from `Admin -> Org Settings -> Extensions`.

Best when:

- the extension is customer-specific IP
- you want a fast proof of concept
- you do not want platform-level installation just to test the idea
- the extension is small and self-contained

Start with:

- `examples/node/org-hello-world-zip-node`
- `examples/python/org-hello-world-zip-python`

### Choose a sidecar when

Use a sidecar when the domain logic should run outside the Valtren AI core runtime.

Best when:

- the logic is compute-heavy or domain-heavy
- your team prefers Python, Java, or .NET
- you already have enterprise service standards
- you want stronger runtime isolation

Start with:

- Python: `examples/python/rolling-mill-quality-sidecar-python`
- Java: `examples/java/furnace-energy-sidecar-java`
- .NET: `examples/dotnet/work-order-risk-sidecar-dotnet`

## Common manufacturing use cases

### 1. Shift supervisor

Typical problems:

- rolling-mill quality drift during the shift
- furnace instability or unusual operational risk
- deciding whether a human approval is required before intervention

Recommended starting point:

- `examples/node/steel-plant-ops-pack`

Why:

- it demonstrates a workflow pack that fits governed intervention loops
- it maps well to “detect -> review -> approve -> prepare next action”
- it is a strong fit for shift-level supervisory intelligence

Use Node pack if:

- the value is mostly workflow orchestration and approvals

Use sidecar if:

- you also need deeper scoring or process analytics from external plant data

### 2. Quality head

Typical problems:

- width variance drifting out of tolerance
- thickness instability
- recurring surface defects
- deciding whether a coil or batch needs escalation

Recommended starting point:

- `examples/python/rolling-mill-quality-sidecar-python`

Why:

- quality scoring often becomes data-heavy quickly
- Python is a good fit for tolerance checks, scoring, and future ML models
- it is easy to extend with statistical rules or anomaly logic

Use Python sidecar if:

- the logic is quality scoring, anomaly detection, or process analytics

Use Node pack if:

- you mainly need workflow packaging and approvals around an already-known signal

### 3. Maintenance planner

Typical problems:

- delayed breakdown work orders
- risk of production impact from overdue maintenance
- deciding which work orders need escalation or immediate planning attention

Recommended starting point:

- `examples/dotnet/work-order-risk-sidecar-dotnet`

Why:

- maintenance and ERP-adjacent logic often lives comfortably in .NET shops
- the example shows a simple risk endpoint that can expand into real prioritization
- it maps naturally to work-order scoring and planning escalation

Use .NET sidecar if:

- your team already builds internal operational services in Microsoft stacks

Use Node pack if:

- you mainly need governance, routing, and approval flows around maintenance signals

### 4. Energy manager

Typical problems:

- furnace energy per ton is drifting above target
- utilities or heat-treatment lines need review
- deciding whether the drift is normal, watch-level, or serious

Recommended starting point:

- `examples/java/furnace-energy-sidecar-java`

Why:

- enterprise process and utilities teams often prefer JVM services
- this example maps well to energy deviation analysis and review workflows
- it can evolve into richer optimization or energy benchmarking logic

Use Java sidecar if:

- the logic will become part of enterprise energy/process systems

Use Node pack if:

- the need is mostly approval flow and intervention orchestration

## Quick mapping table

| Role / team | Best starting example | Best runtime choice |
| --- | --- | --- |
| Shift supervisor | `examples/node/steel-plant-ops-pack` | Node pack |
| Quality head | `examples/python/rolling-mill-quality-sidecar-python` | Python sidecar |
| Maintenance planner | `examples/dotnet/work-order-risk-sidecar-dotnet` | .NET sidecar |
| Energy manager | `examples/java/furnace-energy-sidecar-java` | Java sidecar |
| Plant digital / IT team testing org-owned IP | `examples/node/org-hello-world-zip-node` or `examples/python/org-hello-world-zip-python` | Org ZIP |

## Recommended progression for a manufacturing customer

1. Start with one org-owned hello-world example to validate packaging and deployment.
2. Pick one domain example that matches the team’s first real business case.
3. Keep the first extension narrow and operationally useful.
4. Add approvals only where the workflow needs governance.
5. Split orchestration and heavy analytics when that makes the system easier to maintain.

## Example decision patterns

### Pattern A: workflow-first

Use this when the organization already knows the business rule and mainly needs:

- alerts
- approvals
- next-step packaging
- a reusable starter agent

Best fit:

- Node pack
- Example: `examples/node/steel-plant-ops-pack`

### Pattern B: analytics-first

Use this when the organization needs:

- scoring
- anomaly logic
- tolerance rules
- domain APIs that may grow over time

Best fit:

- Python, Java, or .NET sidecar
- Example: `examples/python/rolling-mill-quality-sidecar-python`

### Pattern C: customer-owned proof of concept

Use this when the organization wants:

- minimal friction
- direct upload from the UI
- org-owned extension IP
- no platform install dependency for the first step

Best fit:

- org ZIP extension
- Example: `examples/python/org-hello-world-zip-python`

## What to avoid early on

Avoid starting with a very broad extension that tries to solve:

- quality
- maintenance
- energy
- approvals
- work-order planning
- and analytics

all in one package.

A better pattern is:

- start narrow
- prove the workflow
- expand the service or pack only after the first use case is working well

## Related examples

- `examples/node/steel-plant-ops-pack`
- `examples/python/rolling-mill-quality-sidecar-python`
- `examples/java/furnace-energy-sidecar-java`
- `examples/dotnet/work-order-risk-sidecar-dotnet`
- `examples/node/org-hello-world-zip-node`
- `examples/python/org-hello-world-zip-python`
