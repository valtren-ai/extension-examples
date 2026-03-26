# Valtren AI Extension Examples

Official sample extensions for Valtren AI, from hello world to advanced domain packs.

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
  python/
    hello-world-sidecar-python/
```

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

### Python

- `hello-world-sidecar-python`
  - Minimal sidecar for the Valtren extension control plane
  - Demonstrates `/health` and `/hooks/{hookName}`
  - Best first polyglot example

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

### Node extension

Install under the Valtren AI runtime discovery directory:

```text
server/extensions/<extension-name>/index.js
```

Then reload extensions from:

`Admin -> Platform -> Extensions -> Reload Extensions`

### Sidecar extension

Deploy your service separately, then register it through the Valtren AI sidecar runtime config.

## Recommended learning path

1. Start with `examples/node/hello-world-node`
2. Move to `examples/node/catalog-only-agent-pack`
3. Then study `examples/node/executor-pack-node`
4. If your team uses Python, review `examples/python/hello-world-sidecar-python`

## Guides

- [Build your first extension](./docs/build-your-first-extension.md)

## Related repositories

- `valtren-ai/core`
  - Licensed Valtren AI core platform

- `valtren-ai/extension-sdk`
  - Shared types, validators, and helpers for extension authors

## License

MIT
