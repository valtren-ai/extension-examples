var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/health", () => Results.Json(new { ok = true, service = "listing-ops-sidecar-dotnet" }));
app.MapPost("/listing/recommend", (ListingRequest request) =>
{
    var recommendations = new List<string>();
    if (request.ImageCount < 4) recommendations.Add("Add supporting gallery images and one dimensions image.");
    if (request.BulletCount < 5) recommendations.Add("Expand bullets to cover features, materials, use case, and care guidance.");
    return Results.Json(new
    {
        ok = true,
        asin = request.Asin,
        recommendations,
        priority = recommendations.Count >= 2 ? "high" : "medium"
    });
});

app.Run();

record ListingRequest(string Asin, int ImageCount, int BulletCount);
