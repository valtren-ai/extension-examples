var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/health", () => Results.Json(new { ok = true, service = "work-order-risk-sidecar-dotnet" }));

app.MapPost("/work-order/risk", (WorkOrderRiskRequest request) =>
{
    var risk = request.IsBreakdown && request.DelayHours >= 4 ? "high"
        : request.DelayHours >= 2 ? "medium"
        : "low";

    return Results.Json(new
    {
        ok = true,
        workOrderId = request.WorkOrderId,
        asset = request.Asset,
        risk,
        recommendation = risk switch
        {
            "high" => "Escalate to maintenance planner and operations supervisor immediately.",
            "medium" => "Review spare availability and next-shift intervention window.",
            _ => "Track in normal maintenance queue."
        }
    });
});

app.Run();

record WorkOrderRiskRequest(string WorkOrderId, string Asset, bool IsBreakdown, int DelayHours);
