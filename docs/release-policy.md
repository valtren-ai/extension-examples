# Release Policy

This guide explains how to version and release Valtren AI example extensions and related public tooling.

## Goals

- Keep examples easy to trust and easy to upgrade.
- Make breaking changes explicit.
- Give teams a predictable path from sample code to production-ready packs.

## Versioning model

Use semantic versioning:

- `MAJOR`
  - breaking changes to scaffold shape, runtime contract, or documented integration patterns
- `MINOR`
  - new examples, new guides, new templates, non-breaking capability additions
- `PATCH`
  - documentation fixes, metadata changes, icon updates, typo fixes, and other non-breaking refinements

## Release checklist

Before cutting a release:

1. update affected READMEs and guides
2. update changelog entries where applicable
3. run validation and smoke checks
4. confirm example links and package names still resolve
5. create a tagged release with concise notes

## Breaking change expectations

When introducing a breaking change:

- document what changed
- describe who is affected
- include migration guidance
- update related playbooks and testing guidance

## Public repo expectations

- `extension-sdk`
  - versioned on npm with release notes and changelog updates
- `create-valtren-extension`
  - versioned on npm with release notes and changelog updates
- `vscode-valtren-extension-tools`
  - versioned on Marketplace and GitHub releases with changelog updates
- `extension-examples`
  - document significant example or guide changes in release notes when they affect consumers materially

## Recommended author workflow

1. make changes on a feature branch
2. open a pull request
3. let CI validate the change
4. merge only after review and required checks pass
5. tag and release from the protected main branch state
