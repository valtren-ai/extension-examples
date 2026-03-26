# executor-pack-node

Executor-backed Valtren AI extension example.

## What it demonstrates

- extension-contributed workflow metadata
- extension-contributed step executor
- workflow-state patch output

This is the best reference when you want to add domain-specific logic without changing Valtren AI core runtime code.

## SDK usage

This example is intended to use:

```js
import { defineExtension, ensureValidExtensionManifest } from "@valtren-ai/extension-sdk";
```

That keeps extension authors from hand-rolling manifest shape validation.

## Install

Copy this folder into:

```text
server/extensions/executor-pack-node/
```

Reload extensions from the Valtren AI admin UI.

## Expected result

- A new workflow appears in the workflow catalog
- A new starter template appears in `Create Agent`
- Running the agent shows extension-produced step output in run details
