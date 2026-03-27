export default async function register(app) {
  app.get('/health', async () => ({
    ok: true,
    service: 'org-claims-triage-zip-node',
  }));

  app.post('/claims/triage', async (request) => {
    const body = request.body || {};
    const amount = Number(body.claimAmount || 0);
    const fraudSignals = Number(body.fraudSignals || 0);
    const claimAgeDays = Number(body.claimAgeDays || 0);
    const recommendation = fraudSignals >= 2 || amount >= 5000
      ? 'Escalate to manual claims review.'
      : claimAgeDays > 14
        ? 'Route to backlog-clearing queue.'
        : 'Continue standard straight-through handling.';
    return {
      ok: true,
      claimId: body.claimId || null,
      claimAmount: amount,
      fraudSignals,
      claimAgeDays,
      recommendation,
    };
  });
}
