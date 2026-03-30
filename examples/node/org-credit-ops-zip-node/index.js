export default async function register({ app }) {
  app.get('/api/ext/org-credit-ops-zip-node/health', async () => ({
    ok: true,
    service: 'org-credit-ops-zip-node',
  }));

  app.post('/api/ext/org-credit-ops-zip-node/credit/review', async (request) => {
    const body = request.body || {};
    const dpd = Number(body.daysPastDue || 0);
    const exposure = Number(body.exposureAmount || 0);
    const recommendation = dpd >= 30 || exposure >= 1000
      ? 'Escalate to manual credit review.'
      : dpd >= 7
        ? 'Assign to follow-up queue for document or repayment check.'
        : 'Continue standard servicing.';
    return {
      ok: true,
      borrowerId: body.borrowerId || null,
      daysPastDue: dpd,
      exposureAmount: exposure,
      recommendation,
    };
  });
}
