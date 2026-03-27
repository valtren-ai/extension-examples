package com.valtren.examples.listinghealth;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class Application {
  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }

  @RestController
  static class ListingHealthController {
    @GetMapping("/health")
    public Map<String, Object> health() {
      return Map.of("ok", true, "service", "listing-health-sidecar-java");
    }

    @PostMapping("/listing/score")
    public Map<String, Object> score(@RequestBody ListingRequest request) {
      int score = 100;
      if (request.imageCount() < 4) score -= 25;
      if (request.bulletCount() < 5) score -= 20;
      if (request.titleLength() > 180) score -= 15;
      score = Math.max(score, 20);

      List<String> issues = new java.util.ArrayList<>();
      if (request.imageCount() < 4) issues.add("Add more gallery images.");
      if (request.bulletCount() < 5) issues.add("Expand bullets to cover features, material, use case, and care guidance.");
      if (request.titleLength() > 180) issues.add("Trim the title for readability and policy safety.");

      Map<String, Object> response = new LinkedHashMap<>();
      response.put("ok", true);
      response.put("asin", request.asin());
      response.put("health_score", score);
      response.put("priority", score < 60 ? "high" : score < 80 ? "medium" : "low");
      response.put("issues", issues);
      return response;
    }
  }

  record ListingRequest(String asin, int imageCount, int bulletCount, int titleLength) {}
}
