# catalog-only-agent-pack

Catalog-only Valtren AI extension example.

## What it demonstrates

- `agent_catalog.steps`
- `agent_catalog.workflows`
- `agent_catalog.templates`

This pack does not add a custom executor. It is useful when you want to publish reusable workflow definitions and starter templates while still relying on core runtime behavior.

## Install

Copy this folder into:

```text
server/extensions/catalog-only-agent-pack/
```

Reload extensions from the Valtren AI admin UI.

## Expected result

- A new workflow appears in `Create Agent`
- A new starter template appears in the starter template catalog
- Step metadata appears in org workflow authoring UI
