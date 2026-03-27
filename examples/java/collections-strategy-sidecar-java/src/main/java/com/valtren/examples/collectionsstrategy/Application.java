package com.valtren.examples.collectionsstrategy;

import java.util.LinkedHashMap;
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
  static class CollectionsController {
    @GetMapping("/health")
    public Map<String, Object> health() {
      return Map.of("ok", true, "service", "collections-strategy-sidecar-java");
    }

    @PostMapping("/collections/strategy")
    public Map<String, Object> strategy(@RequestBody CollectionsRequest request) {
      String lane = request.daysPastDue() >= 30 ? "field-collections"
        : request.daysPastDue() >= 7 ? "agent-follow-up"
        : "digital-reminder";
      Map<String, Object> response = new LinkedHashMap<>();
      response.put("ok", true);
      response.put("borrower_id", request.borrowerId());
      response.put("strategy_lane", lane);
      response.put("recommended_action", lane.equals("field-collections")
        ? "Escalate to high-touch recovery workflow."
        : lane.equals("agent-follow-up")
          ? "Assign to collections agent queue."
          : "Continue automated reminder sequence.");
      return response;
    }
  }

  record CollectionsRequest(String borrowerId, int daysPastDue, String market) {}
}
