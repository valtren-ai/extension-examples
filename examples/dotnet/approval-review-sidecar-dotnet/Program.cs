var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/health", () => Results.Json(new { ok = true, service = "approval-review-sidecar-dotnet" }));

app.MapPost("/approval/review", (ApprovalReviewRequest request) =>
{
    var recommendation = request.RiskLevel?.ToLowerInvariant() switch
    {
        "high" => "Escalate to a named approver and require a written note before continuing.",
        "medium" => "Route to the standard approval queue with a 4-hour SLA.",
        _ => "Allow the default approval path with normal monitoring."
    };

    return Results.Json(new
    {
        ok = true,
        requestId = request.RequestId,
        recommendedAction = recommendation,
        shouldPauseExecution = request.RiskLevel?.ToLowerInvariant() != "low",
        approvalRoute = request.RiskLevel?.ToLowerInvariant() == "high" ? "senior-review" : "default-review"
    });
});

app.Run();

record ApprovalReviewRequest(string RequestId, string RiskLevel, string Summary);
