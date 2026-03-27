var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/health", () => Results.Json(new { ok = true, service = "borrower-eligibility-sidecar-dotnet" }));

app.MapPost("/borrower/eligibility", (BorrowerEligibilityRequest request) =>
{
    var eligible = request.MonthlyIncome >= 250 && request.ActiveLoans <= 2 && request.DaysPastDue < 7;
    return Results.Json(new
    {
        ok = true,
        borrowerId = request.BorrowerId,
        eligible,
        recommendation = eligible
            ? "Proceed to next underwriting or limit review step."
            : "Route to manual review before approval."
    });
});

app.Run();

record BorrowerEligibilityRequest(string BorrowerId, decimal MonthlyIncome, int ActiveLoans, int DaysPastDue);
