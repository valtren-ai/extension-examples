import {
  defineExtension,
  ensureValidExtensionManifest,
} from "@valtren-ai/extension-sdk";

export function registerExtension() {
  return ensureValidExtensionManifest(defineExtension({
    name: "catalog-only-agent-pack",
    version: "1.0.0",
    description: "Catalog-only example pack for Valtren AI workflows and templates.",
    extension_type: "agent_pack",
    agent_catalog: {
      steps: [
        {
          key: "catalog_only_triage",
          title: "Catalog-only triage",
          step_type: "catalog_only_triage",
          category: "Example",
          description: "Example catalog step for triage-style workflows.",
          guidance: "Use this to demonstrate extension-provided step metadata.",
          inputs: [
            { key: "scope", label: "Scope", description: "Workflow scope and owner context." },
            { key: "evidence", label: "Evidence", description: "Evidence loaded by the platform." },
          ],
          outputs: [
            { key: "analysis_summary", label: "Analysis summary", description: "High-level summary from the triage step." },
          ],
          produces: ["analysis_summary"],
          consumes: ["scope", "evidence"],
          allowed_next_step_keys: ["verify_outcomes"],
          executor_kind: "internal",
        },
      ],
      workflows: [
        {
          id: "catalog_only_workflow",
          title: "Catalog-only Workflow",
          description: "Example workflow contributed by an extension catalog.",
          summary: "Simple catalog-only workflow for extension authors.",
          step_keys: ["catalog_only_triage", "verify_outcomes"],
          help_text: "This workflow demonstrates catalog contribution without a custom executor.",
          domain: "generic",
        },
      ],
      templates: [
        {
          id: "catalog_only_template",
          title: "Catalog-only Starter",
          summary: "Starter template contributed by a catalog-only extension.",
          help_text: "Useful as a reference for publishing starter templates.",
          best_for: "Teams learning how to package workflows without custom execution code.",
          domain: "generic",
          type: "ops_supervisor",
          mode: "observe",
          schedule: "daily",
          ai_assisted: true,
          evidence_threshold: 2,
          confidence_threshold: 0.7,
          allowed_actions: ["notify", "create_insight"],
          workflow_id: "catalog_only_workflow",
          enabled_step_keys: ["catalog_only_triage", "verify_outcomes"],
          goal: "Show how an extension can contribute workflow and template metadata.",
          watch_for: "Example triage signals that need a simple workflow and template definition.",
          owner_role: "Operations Lead",
          due_window_hours: 24,
          business_context: "Teams often want reusable workflow packages before they need custom runtime logic.",
          escalation_guidance: "Escalate only if the example pattern needs governance before wider rollout.",
          scope: {
            operating_goal: "Demonstrate extension-contributed workflow metadata.",
          },
          tags: ["example", "catalog", "starter"],
        },
      ],
    },
  }));
}
