import { defineExtension, ensureValidExtensionManifest } from "@valtren-ai/extension-sdk";

const extension = defineExtension({
  name: "payment-gateway-reconciliation-pack",
  version: "0.1.0",
  description: "Partner integration pack for payment reconciliation, exception review, and next-step preparation.",
  agent_catalog: {
    workflows: [
      {
        key: "gateway_reconciliation_loop",
        label: "Gateway Reconciliation Loop",
        description: "Review settlement mismatches, route approval, and prepare the next operator action.",
        steps: [
          "analyze_evidence",
          "prepare_approval_request",
          "wait_for_human_approval",
          "prepare_reconciliation_action"
        ]
      }
    ],
    templates: [
      {
        key: "payment_ops_supervisor",
        label: "Payment Ops Supervisor",
        description: "Starter agent for settlement mismatches, reversals, and gateway exception handling.",
        workflow: "gateway_reconciliation_loop"
      }
    ]
  },
  step_executors: {
    prepare_reconciliation_action: async ({ context }) => {
      const mismatchAmount = Number(context?.mismatch_amount || 0);
      const mismatchType = String(context?.mismatch_type || "settlement_gap");
      const action = mismatchAmount >= 1000
        ? "Escalate to finance ops and hold auto-settlement closure."
        : mismatchType === "duplicate_capture"
          ? "Prepare refund and gateway dispute review."
          : "Queue standard reconciliation follow-up.";
      return {
        ok: true,
        workflow_state_patch: {
          reconciliation_ready: true,
          mismatch_amount: mismatchAmount,
          mismatch_type: mismatchType,
        },
        outputs: {
          execution_result: {
            recommended_action: action,
            mismatch_amount: mismatchAmount,
            mismatch_type: mismatchType,
          }
        }
      };
    }
  }
});

ensureValidExtensionManifest(extension);
export default extension;
