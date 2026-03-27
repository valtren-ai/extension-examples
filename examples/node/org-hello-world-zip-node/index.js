import { defineExtension, ensureValidExtensionManifest } from "@valtren-ai/extension-sdk";

const extension = defineExtension({
  name: "org-hello-world-zip-node",
  version: "0.1.0",
  description: "Minimal Node extension shaped for org ZIP upload and in-process enablement.",
  routes: {
    register(app) {
      app.get("/api/ext/org-hello-world-zip-node/health", async () => ({
        ok: true,
        service: "org-hello-world-zip-node",
        message: "Hello from an org-uploaded Node extension.",
      }));

      app.get("/api/ext/org-hello-world-zip-node/ping", async () => ({
        ok: true,
        extension: "org-hello-world-zip-node",
        message: "The org-level Node ZIP extension is running.",
      }));
    },
  },
});

ensureValidExtensionManifest(extension);
export default extension;
