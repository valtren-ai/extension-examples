# Create A Custom Extension In VS Code

This guide walks through the easiest end-to-end path for building a custom Valtren AI extension from Visual Studio Code, testing it, and installing it into Valtren AI.

## Before you start

You should have:

- Visual Studio Code installed
- Node.js available
- access to a Valtren AI environment
- permission to use `Admin -> Org Settings -> Extensions` if you want to test org ZIP flows

Helpful links:

- [Valtren AI Extension Tools on VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=valtren-ai.vscode-valtren-extension-tools)
- [create-valtren-extension on npm](https://www.npmjs.com/package/create-valtren-extension)
- [Build your first extension](./build-your-first-extension.md)
- [Testing and smoke-checks guide](./testing-and-smoke-checks-guide.md)

## Step 1: Install the VS Code extension

Install:

- `Valtren AI Extension Tools`

From VS Code:

1. Open Extensions
2. Search for `Valtren AI Extension Tools`
3. Click `Install`

## Step 2: Decide which runtime to use

Choose the simplest template that matches your need.

### Use `node-pack` when:

- you want an in-process extension
- you want custom workflow steps or executors
- you want tight integration with the Valtren runtime

### Use `org-zip-node` when:

- you want to upload a Node package from the Valtren UI
- you want customer-owned extension IP
- you want the easiest proof-of-concept for an org-scoped extension

### Use `org-zip-python` when:

- you want an org-uploaded Python package
- you want simple health and endpoint behavior
- you prefer a Python-first business-logic slice

### Use `sidecar-python`, `sidecar-java`, or `sidecar-dotnet` when:

- your team already works in that language
- you want runtime isolation
- your extension behaves more like a service than an in-process pack

## Step 3: Scaffold the extension

In VS Code:

1. Open the Command Palette
2. Run:
   - `Valtren: Create Extension`
3. Enter a project name
4. Pick the runtime template
5. Pick the folder where the project should be created

Equivalent terminal command:

```bash
npx create-valtren-extension my-extension --runtime org-zip-node
```

Other examples:

```bash
npx create-valtren-extension my-extension --runtime node-pack
npx create-valtren-extension my-extension --runtime org-zip-python
npx create-valtren-extension my-extension --runtime sidecar-python
npx create-valtren-extension my-extension --runtime sidecar-java
npx create-valtren-extension my-extension --runtime sidecar-dotnet
```

## Step 4: Understand the generated project

The scaffolded project will include:

- a README
- an extension entry file
- a minimal route, workflow, or health endpoint
- basic package metadata

### If you chose `org-zip-node`

Look for:

- `index.js`
- a route registration or tiny handler

### If you chose `org-zip-python`

Look for:

- `app.py` or `main.py`
- `/health`
- a simple domain endpoint like `/ping`

### If you chose `node-pack`

Look for:

- starter catalog items
- custom executor placeholders

## Step 5: Make a small custom change

Before testing, change something obvious so you can confirm your version is running.

Good examples:

- change the message returned by `/ping`
- rename a workflow title
- add one more output field
- change the displayed extension name

## Step 6: Test locally

How you test depends on the runtime.

### For org ZIP Node or Python

The easiest path is:

1. prepare the folder
2. zip the contents of the extension root
3. upload it into Valtren AI

Important:

- zip the contents of the extension folder
- do not zip a parent folder containing the extension folder

Example:

```bash
cd my-extension
zip -rq /tmp/my-extension.zip .
```

### For sidecars

Run the sidecar locally first.

Examples:

```bash
python3 app.py
```

```bash
dotnet run
```

```bash
./mvnw spring-boot:run
```

Use the full [testing and smoke-checks guide](./testing-and-smoke-checks-guide.md) for copy-paste validation steps.

## Step 7: Install into Valtren AI

### Option A: Upload ZIP

In Valtren AI:

1. Go to `Admin -> Org Settings -> Extensions`
2. Upload the ZIP
3. Review validation results
4. Review requested capabilities
5. Approve
6. Enable for the org
7. Click `Test extension`

### Option B: Import from GitHub

If your extension is already in a GitHub repo:

1. Go to `Admin -> Org Settings -> Extensions`
2. Use `Import from GitHub`
3. Provide:
   - repo URL
   - optional branch or tag
   - optional subdirectory
4. Review
5. Approve
6. Enable
7. Test

## Step 8: Validate behavior

After enablement, confirm:

- install status is `active`
- health is `healthy`
- the test result is correct
- the returned message or endpoint output reflects your change

## Step 9: Review security and capabilities

Before sharing the extension with your team:

1. list what data it needs
2. list what routes, workflows, or executors it adds
3. note whether it needs external API access or secrets
4. document risk level
5. run through the [Security and capability review guide](./security-and-capability-review-guide.md)

## Step 10: Version it properly

Once the extension works:

- give it a real version
- record what changed
- define upgrade notes if behavior changed

Use:

- [Versioning and upgrade guide](./versioning-and-upgrade-guide.md)

## Suggested first examples

Compare your scaffold against:

- `examples/node/org-hello-world-zip-node`
- `examples/python/org-hello-world-zip-python`
- `examples/node/executor-pack-node`
- `examples/python/hello-world-sidecar-python`

## Common mistakes

### ZIP contains the parent folder instead of the extension root

Fix:

- re-create the ZIP from inside the extension folder

### Wrong entry file name

Valtren AI currently expects:

- Node ZIP root: `index.js` or `index.mjs`
- Python ZIP root: `app.py` or `main.py`

### No obvious proof your change is live

Fix:

- change a message or output field before your first upload

## What to do next

Once your first custom extension is working:

- add a README for your team
- add a smoke-test script
- add a review checklist
- move the project into version control
- consider GitHub import instead of repeated manual ZIP uploads
