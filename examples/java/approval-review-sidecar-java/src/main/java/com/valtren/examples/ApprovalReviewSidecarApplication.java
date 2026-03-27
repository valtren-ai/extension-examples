package com.valtren.examples;

import java.util.List;
import java.util.Map;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ApprovalReviewSidecarApplication {
  public static void main(String[] args) {
    SpringApplication.run(ApprovalReviewSidecarApplication.class, args);
  }

  @GetMapping("/health")
  public Map<String, Object> health() {
    return Map.of("ok", true, "service", "approval-review-sidecar-java");
  }

  @PostMapping("/review")
  public Map<String, Object> review(@RequestBody(required = false) Map<String, Object> payload) {
    return Map.of(
      "ok", true,
      "decision_guidance", "Route high-risk changes to a human reviewer and auto-pass low-risk changes.",
      "required_followups", List.of("verify owner role", "collect decision note"),
      "received", payload == null ? Map.of() : payload
    );
  }
}
