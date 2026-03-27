# approval-gate-pack

Medium-complexity in-process Node extension for Valtren AI.

## What it demonstrates

- SDK-backed extension manifest validation
- a custom workflow contribution
- a starter template contribution
- an extension-native executor that reacts to approval state

## Why it is useful

This is a good next step after `executor-pack-node` when you want an example that feels closer to a real governed workflow instead of a tiny smoke test.

## Local run

```bash
cd examples/node/approval-gate-pack
npm install
```

Then copy the folder into Valtren AI's Node extension runtime or zip the folder and upload it through the platform extension flow.
