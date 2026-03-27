package com.valtren.examples.furnaceenergy;

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
  static class FurnaceEnergyController {
    @GetMapping("/health")
    public Map<String, Object> health() {
      return Map.of("ok", true, "service", "furnace-energy-sidecar-java");
    }

    @PostMapping("/furnace/energy")
    public Map<String, Object> analyze(@RequestBody FurnaceEnergyRequest request) {
      double delta = request.actualKwhPerTon() - request.targetKwhPerTon();
      Map<String, Object> response = new LinkedHashMap<>();
      response.put("ok", true);
      response.put("furnace_id", request.furnaceId());
      response.put("delta_kwh_per_ton", delta);
      response.put("status", delta > 25 ? "high_drift" : delta > 10 ? "watch" : "normal");
      response.put("recommended_action", delta > 25
        ? "Inspect burner tuning, charge mix, and refractory condition."
        : delta > 10
          ? "Review shift trend and tune setpoints."
          : "Continue normal energy monitoring.");
      return response;
    }
  }

  record FurnaceEnergyRequest(String furnaceId, double targetKwhPerTon, double actualKwhPerTon) {}
}
