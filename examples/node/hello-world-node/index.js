export function registerExtension({ app }) {
  app.get("/api/ext/hello-world-node/ping", async () => ({
    ok: true,
    extension: "hello-world-node",
    message: "Hello from Valtren AI extension examples.",
    ts: new Date().toISOString(),
  }));

  return {
    name: "hello-world-node",
    version: "1.0.0",
    description: "Minimal in-process Node extension example for Valtren AI.",
    extension_type: "example",
    hooks: {
      onStartup: async () => app.log.info("hello-world-node extension started"),
      onShutdown: async () => app.log.info("hello-world-node extension stopped"),
    },
  };
}
