import {
  defineExtension,
  ensureValidExtensionManifest,
} from "@valtren-ai/extension-sdk";

function buildDiagnosis(agent) {
  const scope = agent && agent.scope && typeof agent.scope === "object" ? agent.scope : {};
  const ownerRole = String(scope.owner_role || "Operations Lead");
  return {
    summary: "Extension executor completed a custom diagnostic pass and prepared governed next actions.",
    likely_causes: [
      {
        key: "example_signal_cluster",
        label: "Example signal cluster",
        confidence: 0.74,
        rationale: "This sample executor demonstrates how a domain pack can rank likely causes from scoped evidence.",
      },
    ],
    recommended_actions: [
      {
        title: "Review the extension-produced diagnosis",
        owner: ownerRole,
        due_window: "8h",
        reason: "Use this action to confirm the executor path is wired correctly.",
      },
    ],
  };
}

export function registerExtension() {
  return ensureValidExtensionManifest(defineExtension({
    name: "executor-pack-node",
    version: "1.0.0",
    description: "Node executor example for Valtren AI extension authors.",
    extension_type: "agent_pack",
    agent_catalog: {
      steps: [
        {
          key: "executor_pack_diagnose",
          title: "Executor pack diagnose",
          step_type: "executor_pack_diagnose",
          category: "Example",
          description: "Run a custom extension-backed diagnosis step.",
          guidance: "Use this step when demonstrating extension-native execution.",
          inputs: [
            { key: "scope", label: "Scope", description: "Workflow scope and constraints." },
            { key: "evidence", label: "Evidence", description: "Evidence loaded by the platform." },
          ],
          outputs: [
            { key: "analysis_summary", label: "Analysis summary", description: "Summary produced by the extension executor." },
            { key: "recommended_actions", label: "Recommended actions", description: "Actions prepared by the extension executor." },
            { key: "example_diagnosis", label: "Example diagnosis", description: "Structured state patch for the workflow." },
          ],
          produces: ["analysis_summary", "recommended_actions", "example_diagnosis"],
          consumes: ["scope", "evidence"],
          allowed_next_step_keys: ["request_approval", "verify_outcomes"],
          executor_kind: "extension",
        },
      ],
      workflows: [
        {
          id: "executor_pack_workflow",
          title: "Executor Pack Workflow",
          description: "Example extension workflow with an executor-backed first step.",
          summary: "Demonstrates how extension execution plugs into the Valtren AI runtime.",
          step_keys: ["executor_pack_diagnose", "request_approval", "wait_for_approval", "verify_outcomes"],
          help_text: "Use this workflow to confirm extension-native execution is working.",
          domain: "generic",
        },
      ],
      templates: [
        {
          id: "executor_pack_template",
          title: "Executor Pack Starter",
          summary: "Starter template for the executor-backed example workflow.",
          help_text: "Good first reference for extension authors building custom runtime logic.",
          best_for: "Teams learning how to add custom execution without modifying core runtime code.",
          domain: "generic",
          type: "ops_supervisor",
          mode: "act",
          schedule: "daily",
          ai_assisted: true,
          evidence_threshold: 2,
          confidence_threshold: 0.72,
          allowed_actions: ["notify", "create_insight", "create_review"],
          workflow_id: "executor_pack_workflow",
          enabled_step_keys: ["executor_pack_diagnose", "request_approval", "wait_for_approval", "verify_outcomes"],
          approval_channel: "email",
          goal: "Demonstrate extension-native execution in a governed Valtren AI workflow.",
          watch_for: "Signals that should be analyzed by a custom extension executor before the workflow continues.",
          owner_role: "Operations Lead",
          due_window_hours: 8,
          business_context: "Domain teams often need custom diagnosis logic while still using core workflow governance.",
          escalation_guidance: "Escalate when the custom diagnosis suggests downstream actions need review.",
          scope: {
            operating_goal: "Verify extension executor integration end to end.",
          },
          tags: ["example", "executor", "runtime"],
        },
      ],
    },
    step_executors: [
      {
        key: "executor_pack_diagnose_runtime",
        title: "Executor pack diagnose runtime",
        executor_kind: "extension",
        step_types: ["executor_pack_diagnose"],
        async execute({ agent }) {
          const diagnosis = buildDiagnosis(agent);
          return {
            handled: true,
            status: "completed",
            summary: diagnosis.summary,
            outputPayload: {
              analysis_summary: diagnosis.summary,
              likely_causes: diagnosis.likely_causes,
              recommended_actions: diagnosis.recommended_actions,
            },
            workflowStatePatch: {
              analysis_result: diagnosis,
              example_diagnosis: diagnosis,
            },
          };
        },
      },
    ],
  }));
}
