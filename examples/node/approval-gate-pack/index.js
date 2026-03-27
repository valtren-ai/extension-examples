import { defineExtension, ensureValidExtensionManifest } from "@valtren-ai/extension-sdk";

const extension = defineExtension({
  name: "approval-gate-pack",
  version: "0.1.0",
  description: "Medium-complexity Node extension that adds an approval-gated workflow and executor.",
  agent_catalog: {
    workflows: [
      {
        key: "guided_approval_loop",
        label: "Guided Approval Loop",
        description: "Analyze evidence, package an approval, wait for the decision, and prepare the next action.",
        steps: [
          "analyze_evidence",
          "prepare_approval_request",
          "wait_for_human_approval",
          "prepare_guided_execution"
        ]
      }
    ],
    templates: [
      {
        key: "approval_gate_operator",
        label: "Approval Gate Operator",
        description: "Starter agent for governed approval loops.",
        workflow: "guided_approval_loop"
      }
    ]
  },
  step_executors: {
    prepare_guided_execution: async ({ context }) => {
      const approval = context?.approval_decision || "pending";
      return {
        ok: true,
        workflow_state_patch: {
          execution_ready: approval === "approved",
          next_action_summary:
            approval === "approved"
              ? "Proceed with the approved follow-up action."
              : "Stay paused until the reviewer approves or updates the request."
        },
        outputs: {
          execution_result: {
            approval_decision: approval,
            message:
              approval === "approved"
                ? "Approved actions were packaged for execution."
                : "Execution remains paused behind the approval gate."
          }
        }
      };
    }
  }
});

ensureValidExtensionManifest(extension);
export default extension;
