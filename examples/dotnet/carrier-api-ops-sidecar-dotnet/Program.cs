var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/health", () => Results.Json(new { ok = true, service = "carrier-api-ops-sidecar-dotnet" }));

app.MapPost("/carrier/ops", (CarrierOpsRequest request) =>
{
    var lane = request.ErrorRatePercent >= 5 || request.BacklogCount >= 50
        ? "vendor-escalation"
        : request.SlaBreaches24h >= 3
            ? "priority-follow-up"
            : "monitor";
    var recommendation = lane switch
    {
        "vendor-escalation" => "Escalate to partner API owner and throttle dependent workflows.",
        "priority-follow-up" => "Assign to priority integration queue for recovery.",
        _ => "Continue normal connector monitoring."
    };
    return Results.Json(new
    {
        ok = true,
        carrierName = request.CarrierName,
        lane,
        recommendation
    });
});

app.Run();

record CarrierOpsRequest(string CarrierName, decimal ErrorRatePercent, int BacklogCount, int SlaBreaches24h);
