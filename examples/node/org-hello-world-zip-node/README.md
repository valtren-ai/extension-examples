# org-hello-world-zip-node

Minimal Node example shaped for `Admin -> Org Settings -> Extensions -> Upload ZIP`.

## What it demonstrates

- a ZIP-ready Node extension with `index.js` at the archive root
- a tiny health route for smoke testing
- a second domain-style route to prove the extension is live after enablement

## How to use it

1. Zip the contents of this folder, not the parent folder.
2. Upload the ZIP from `Admin -> Org Settings -> Extensions`.
3. Approve the package.
4. Enable it for the organization.
5. Click `Test extension`.

## Expected result

- package validation passes
- capability review shows route registration
- runtime becomes `active`
- health becomes `healthy`
- the extension responds from its registered routes
