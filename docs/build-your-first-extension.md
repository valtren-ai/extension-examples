# Build your first Valtren AI extension

This guide walks through the simplest path for building a real extension for Valtren AI.

## Step 1: choose your extension model

Start with one of these:

- In-process Node extension
  - easiest path
  - best for workflows, templates, and lightweight custom executors

- Org ZIP Python extension
  - best for testing the new org extension upload flow
  - simplest path if you want to upload a Python ZIP directly in the product

- Polyglot sidecar extension
  - best when your team prefers Python, Java, or .NET
  - good for ML, optimization, forecasting, or isolated domain services

If you are new to the platform, start with a Node extension first.

If you specifically want to test org-owned Python uploads, start with the org ZIP example.

## Step 2: start from an example

Use one of the examples in this repository:

- `examples/node/hello-world-node`
- `examples/node/catalog-only-agent-pack`
- `examples/node/executor-pack-node`
- `examples/python/org-hello-world-zip-python`
- `examples/python/hello-world-sidecar-python`

## Step 3: install the SDK

For a Node extension:

```bash
npm install @valtren-ai/extension-sdk@^0.2.0
```

The SDK is published on npm here:

- [npmjs.com/package/@valtren-ai/extension-sdk](https://www.npmjs.com/package/@valtren-ai/extension-sdk)

## Step 4: define your extension manifest

Use the SDK helpers:

```js
import {
  defineExtension,
  ensureValidExtensionManifest,
} from "@valtren-ai/extension-sdk";

const manifest = defineExtension({
  name: "my-extension",
  version: "1.0.0",
  description: "My first Valtren AI extension",
});

export function registerExtension() {
  return ensureValidExtensionManifest(manifest);
}
```

## Step 5: add catalog contributions

If you want the extension to show up in `Create Agent` and workflow authoring, add:

- `agent_catalog.steps`
- `agent_catalog.workflows`
- `agent_catalog.templates`

If you only need a custom route or hook, you can skip catalog contributions.

## Step 6: add a custom executor if needed

Use `step_executors` when the extension must run domain-specific logic that core runtime does not provide.

Typical use cases:

- diagnosis logic
- scoring logic
- domain-specific action preparation
- sidecar-driven analysis

## Step 7: install into Valtren AI

For Node extensions, place the extension under:

```text
server/extensions/<extension-name>/
```

Then reload from:

`Admin -> Platform -> Extensions -> Reload Extensions`

For org ZIP Python extensions:

1. Zip the contents of `examples/python/org-hello-world-zip-python`
2. Go to `Admin -> Org Settings -> Extensions`
3. Upload ZIP
4. Review and approve
5. Enable for org
6. Click `Test extension`

## Step 8: verify discovery

Check:

- `Admin -> Platform -> Extensions`
- `Agents -> Create Agent`
- `Admin -> Org Settings -> Agents`
- `Admin -> Org Settings -> Extensions` for org-owned ZIP uploads

You should see your extension workflow/template/step metadata if you contributed catalog items.

## Step 9: run the extension

Create an agent that uses your workflow, then run it and inspect:

- run details
- step outputs
- wait states
- workflow state patches

That confirms both catalog integration and runtime execution are working.

For org ZIP Python extensions, use the built-in `Test extension` button first.

## Step 10: harden and publish

Before publishing:

- add README instructions
- add license
- validate your manifest with the SDK
- include screenshots or expected output
- keep examples small and focused

If you want examples of published SDK usage, see:

- `examples/node/catalog-only-agent-pack`
- `examples/node/executor-pack-node`
