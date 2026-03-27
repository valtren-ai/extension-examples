# Valtren AI Extension Examples

[![npm version](https://img.shields.io/npm/v/%40valtren-ai%2Fextension-sdk)](https://www.npmjs.com/package/@valtren-ai/extension-sdk)
[![Publish SDK](https://github.com/valtren-ai/extension-sdk/actions/workflows/publish.yml/badge.svg)](https://github.com/valtren-ai/extension-sdk/actions/workflows/publish.yml)

Official sample extensions for Valtren AI, from hello world to advanced domain packs.

Published SDK:

- [`@valtren-ai/extension-sdk@0.1.0`](https://www.npmjs.com/package/@valtren-ai/extension-sdk)

## What this repo is for

This repository helps extension authors learn how to build on top of the Valtren AI core platform without modifying core runtime code.

It demonstrates two extension models:

- In-process Node extensions
- Polyglot sidecar extensions

Use the Node examples when you want the simplest authoring model and close integration with the platform runtime.

Use the sidecar examples when your team prefers Python, Java, or .NET, or when you want stronger execution isolation for custom domain logic.

## Repository layout

```text
examples/
  node/
    hello-world-node/
    catalog-only-agent-pack/
    executor-pack-node/
    approval-gate-pack/
  python/
    hello-world-sidecar-python/
    org-hello-world-zip-python/
    listing-audit-sidecar-python/
  java/
    hello-world-sidecar-java/
    approval-review-sidecar-java/
  dotnet/
    hello-world-sidecar-dotnet/
    listing-ops-sidecar-dotnet/
```

## Which example should I start with?

| Goal | Best example |
| --- | --- |
| First ever Valtren extension | `examples/node/hello-world-node` |
| Add workflows/templates only | `examples/node/catalog-only-agent-pack` |
| Add a Node executor | `examples/node/executor-pack-node` |
| Learn a medium Node example | `examples/node/approval-gate-pack` |
| Test org ZIP upload for Python | `examples/python/org-hello-world-zip-python` |
| Build a Python sidecar service | `examples/python/hello-world-sidecar-python` |
| Build a medium Python sidecar | `examples/python/listing-audit-sidecar-python` |
| Start with Java | `examples/java/hello-world-sidecar-java` |
| Start with .NET | `examples/dotnet/hello-world-sidecar-dotnet` |

## Included examples

### Node

- `hello-world-node`
  - Minimal extension package
  - Demonstrates `registerExtension(...)`
  - Best first example

- `catalog-only-agent-pack`
  - Demonstrates `agent_catalog`
  - Adds custom steps, workflows, and starter templates
  - No custom executor yet

- `executor-pack-node`
  - Demonstrates `step_executors`
  - Adds an extension-native step that produces workflow state
  - Best reference for runtime execution

- `approval-gate-pack`
  - Medium-complexity in-process extension
  - Demonstrates a governed workflow plus an approval-aware executor
  - Good bridge from toy sample to real runtime behavior

### Python

- `hello-world-sidecar-python`
  - Minimal sidecar for the Valtren extension control plane
  - Demonstrates `/health` and `/hooks/{hookName}`
  - Best first polyglot example

- `org-hello-world-zip-python`
  - Minimal Python example shaped for `Org Settings -> Extensions -> Upload ZIP`
  - Best first example for org-level Python ZIP enablement

- `listing-audit-sidecar-python`
  - Medium-complexity sidecar example
  - Demonstrates a domain endpoint and simple listing-health scoring

### Java

- `hello-world-sidecar-java`
  - Simple Spring Boot sidecar example
  - Good first JVM-side extension sample

- `approval-review-sidecar-java`
  - Medium-complexity Java sidecar
  - Demonstrates an approval-review domain endpoint

### .NET

- `hello-world-sidecar-dotnet`
  - Simple ASP.NET Core sidecar example

- `listing-ops-sidecar-dotnet`
  - Medium-complexity .NET sidecar
  - Demonstrates a domain endpoint and lightweight listing recommendations

## How extensions fit into Valtren AI

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

## Typical install paths

For SDK-backed examples, install the shared package first:

```bash
npm install @valtren-ai/extension-sdk@^0.1.0
```

The package is live on npm:

- [npmjs.com/package/@valtren-ai/extension-sdk](https://www.npmjs.com/package/@valtren-ai/extension-sdk)

### Node extension

Install under the Valtren AI runtime discovery directory:

```text
server/extensions/<extension-name>/index.js
```

Then reload extensions from:

`Admin -> Platform -> Extensions -> Reload Extensions`

### Sidecar extension

Deploy your service separately, then register it through the Valtren AI sidecar runtime config.

### Org Python ZIP extension

For the new org upload flow, start with:

- `examples/python/org-hello-world-zip-python`

Then zip the folder contents and upload from:

`Admin -> Org Settings -> Extensions`

## Recommended learning path

1. Start with `examples/node/hello-world-node`
2. Move to `examples/node/catalog-only-agent-pack`
3. Then study `examples/node/executor-pack-node`
4. Review `examples/node/approval-gate-pack`
5. If you want the org ZIP upload flow, try `examples/python/org-hello-world-zip-python`
6. Then move into Python, Java, or .NET sidecars for domain logic

## Guides

- [Build your first extension](./docs/build-your-first-extension.md)

## Related repositories

- `valtren-ai/core`
  - Licensed Valtren AI core platform

- `valtren-ai/extension-sdk`
  - Shared types, validators, and helpers for extension authors

## License

MIT
