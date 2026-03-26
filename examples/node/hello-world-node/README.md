# hello-world-node

Minimal in-process Node extension for Valtren AI.

## What it demonstrates

- `registerExtension(...)`
- startup/shutdown hooks
- a simple health-style route

## Install

Copy this folder into the Valtren AI runtime extension directory as:

```text
server/extensions/hello-world-node/
```

Then reload extensions from:

`Admin -> Platform -> Extensions -> Reload Extensions`

## Expected result

- Extension appears in `Loaded Extensions`
- Route responds at:

```text
/api/ext/hello-world-node/ping
```
