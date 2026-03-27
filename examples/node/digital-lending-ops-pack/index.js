import { defineExtension, ensureValidExtensionManifest } from "@valtren-ai/extension-sdk";

const extension = defineExtension({
  name: "digital-lending-ops-pack",
  version: "0.1.0",
  description: "Micro-finance and digital lending Node pack for governed borrower review and intervention workflows.",
  agent_catalog: {
    workflows: [
      {
        key: "borrower_risk_review_loop",
        label: "Borrower Risk Review Loop",
        description: "Assess borrower risk, route approval, and prepare the next lender action.",
        steps: [
          "analyze_evidence",
          "prepare_approval_request",
          "wait_for_human_approval",
          "prepare_borrower_intervention"
        ]
      }
    ],
    templates: [
      {
        key: "portfolio_risk_supervisor",
        label: "Portfolio Risk Supervisor",
        description: "Starter agent for delinquency risk, field intervention, and collection strategy approvals.",
        workflow: "borrower_risk_review_loop"
      }
    ]
  },
  step_executors: {
    prepare_borrower_intervention: async ({ context }) => {
      const risk = String(context?.risk_band || "medium").toLowerCase();
      const segment = context?.borrower_segment || "repeat borrower";
      const action = risk === "high"
        ? "Escalate to collections review and pause automatic limit increase."
        : risk === "medium"
          ? "Schedule borrower follow-up and verify repayment signal quality."
          : "Continue standard servicing with watchlist monitoring.";
      return {
        ok: true,
        workflow_state_patch: {
          intervention_ready: true,
          borrower_segment: segment,
          risk_band: risk,
        },
        outputs: {
          execution_result: {
            recommended_action: action,
            borrower_segment: segment,
          }
        }
      };
    }
  }
});

ensureValidExtensionManifest(extension);
export default extension;
