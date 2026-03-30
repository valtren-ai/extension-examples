# org-credit-ops-zip-node

Minimal Node org ZIP extension for banking and credit-operations teams.

## What it demonstrates

- `index.js` at ZIP root
- `/api/ext/org-credit-ops-zip-node/health` route for Valtren smoke test
- `/api/ext/org-credit-ops-zip-node/credit/review` endpoint for quick servicing or credit-review recommendations

## Route convention

Org ZIP extensions should expose stable public routes under:

- `/api/ext/<stable-extension-key>/...`

For this example:

- `/api/ext/org-credit-ops-zip-node/health`
- `/api/ext/org-credit-ops-zip-node/credit/review`

## Best for

- credit operations proof of concept
- lender or bank-owned ZIP upload through `Admin -> Org Settings -> Extensions`
- simple org-specific servicing rules

## How to zip it

Zip the contents of this folder, not the folder itself.
