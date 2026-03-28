# Security and Capability Review Guide

This guide helps extension authors review what an extension is allowed to do before it is installed or enabled in Valtren AI.

## Why this matters

Extensions are powerful because they can add:

- routes
- workflows
- templates
- step executors
- sidecar integrations
- organization-owned logic

That same power means every extension should go through a lightweight security and capability review.

## Start with the capability question

Before installing an extension, ask:

- what does this extension add?
- what systems can it affect?
- what data can it read or transform?
- what operational actions might it trigger?
- is the requested power appropriate for this business problem?

## Review the declared capabilities

At minimum, review whether the extension:

- registers routes
- adds workflow steps
- adds starter templates
- adds step executors
- depends on sidecars or external services
- needs secrets, credentials, or connector access

A safe review should identify:

- what the extension can do now
- what it might be expanded to do later
- who should approve it

## Capability review checklist

Use this simple checklist for every candidate extension.

### 1. Business fit

Confirm:

- the extension solves a real, narrow problem
- the scope is understandable
- the owner team is known
- the expected operator is known

### 2. Runtime fit

Confirm the chosen runtime is appropriate:

- Node pack for orchestration and workflow logic
- org ZIP for customer-owned proof of concept
- sidecar for domain-heavy logic and runtime isolation

### 3. Operational impact

Confirm whether the extension:

- only reads or scores data
- prepares recommendations
- routes approvals
- can influence a downstream action
- might affect external systems or customer outcomes

The more operational impact it has, the stronger the review should be.

### 4. Data sensitivity

Ask:

- does it handle PII?
- does it handle financial, borrower, customer, or claims data?
- does it process operational or plant data that should stay internal?
- does it log request payloads or results?

If yes, document the boundaries clearly.

### 5. Health and rollback

Confirm the extension has:

- a `/health` endpoint or smoke route when relevant
- a known rollback path
- a prior version or artifact available

## Red flags to stop and review more carefully

Pause and escalate when an extension:

- requests more capabilities than the business case needs
- combines too many unrelated concerns in one package
- lacks a clear owner
- has no health check or smoke-test path
- changes workflow keys or route contracts without upgrade notes
- relies on undocumented external services
- handles sensitive data without explaining retention or logging behavior

## Suggested approval levels

### Low-risk extension

Examples:

- hello-world route
- read-only scoring endpoint
- starter template only pack

Suggested review:

- technical owner review
- quick smoke test

### Medium-risk extension

Examples:

- approval-routing workflow
- org-owned ZIP extension for internal operations
- partner health scoring sidecar

Suggested review:

- technical owner review
- business owner review
- smoke test and rollback confirmation

### High-risk extension

Examples:

- extension that affects write-back or customer-facing actions
- extension that handles sensitive financial or claims data
- extension that influences external partner operations

Suggested review:

- technical owner review
- business owner review
- governance or risk review
- explicit rollback plan

## Recommended reviewer notes template

Use notes like this during approval:

- Extension name:
- Version:
- Owner team:
- Runtime type:
- Declared capabilities:
- Sensitive data handled:
- External systems touched:
- Smoke test path:
- Rollback path:
- Approval decision:
- Follow-up conditions:

## Example review outcomes

### Approved as-is

Use when:

- the capability scope is narrow
- the owner is known
- the smoke test passes
- the rollback path is clear

### Approved with conditions

Use when:

- the extension is acceptable
- but needs a future hardening step, such as:
  - stronger logging controls
  - a better health check
  - clearer version notes

### Hold for revision

Use when:

- the extension requests too much power
- the runtime model is wrong
- the owner or rollback path is unclear
- the extension should be split into smaller pieces

## Production mindset

A good extension review is not about blocking progress. It is about making sure a useful extension is:

- understandable
- narrow in scope
- safe to install
- safe to upgrade
- safe to disable or roll back
