import { defineExtension, ensureValidExtensionManifest } from "@valtren-ai/extension-sdk";

const extension = defineExtension({
  name: "steel-plant-ops-pack",
  version: "0.1.0",
  description: "Manufacturing-focused Node pack for steel plant supervision, approvals, and next-step preparation.",
  agent_catalog: {
    workflows: [
      {
        key: "steel_plant_intervention_loop",
        label: "Steel Plant Intervention Loop",
        description: "Detect operational risk in a steel plant, route approval, and prepare the next intervention.",
        steps: [
          "analyze_evidence",
          "prepare_approval_request",
          "wait_for_human_approval",
          "prepare_steel_plant_intervention"
        ]
      }
    ],
    templates: [
      {
        key: "steel_shift_supervisor",
        label: "Steel Shift Supervisor",
        description: "Starter agent for plant interruptions, rolling-mill quality drift, and furnace intervention approvals.",
        workflow: "steel_plant_intervention_loop"
      }
    ]
  },
  step_executors: {
    prepare_steel_plant_intervention: async ({ context }) => {
      const area = context?.plant_area || "rolling mill";
      const severity = String(context?.risk_level || "medium").toLowerCase();
      const priority = severity === "high" ? "immediate" : severity === "medium" ? "same_shift" : "planned";
      return {
        ok: true,
        workflow_state_patch: {
          plant_action_ready: true,
          intervention_priority: priority,
          intervention_area: area,
        },
        outputs: {
          execution_result: {
            recommended_intervention: `Prepare ${priority} intervention plan for ${area}.`,
            safety_note: severity === "high" ? "Pause autonomous continuation until shift lead approval is recorded." : "Continue under normal shift controls.",
          }
        }
      };
    }
  }
});

ensureValidExtensionManifest(extension);
export default extension;
