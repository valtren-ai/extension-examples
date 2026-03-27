var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/health", () => Results.Json(new { ok = true, service = "hello-world-sidecar-dotnet" }));
app.MapPost("/hooks/{hookName}", (string hookName, object? payload) => Results.Json(new
{
    ok = true,
    hook = hookName,
    received = payload
}));

app.Run();
