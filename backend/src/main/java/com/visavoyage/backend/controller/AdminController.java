package com.visavoyage.backend.controller;

import com.visavoyage.backend.model.VisaApplication;
import com.visavoyage.backend.repository.VisaApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private VisaApplicationRepository visaApplicationRepository;

    @GetMapping("/applications")
    public ResponseEntity<List<VisaApplication>> getAllApplications() {
        return ResponseEntity.ok(visaApplicationRepository.findAll());
    }

    @PutMapping("/applications/{trackingId}/status")
    public ResponseEntity<?> updateApplicationStatus(@PathVariable String trackingId, @RequestBody Map<String, String> statusUpdate) {
        String newStatus = statusUpdate.get("status");
        Optional<VisaApplication> optionalApp = visaApplicationRepository.findByTrackingId(trackingId);

        if (optionalApp.isPresent()) {
            VisaApplication app = optionalApp.get();
            app.setStatus(newStatus);
            visaApplicationRepository.save(app);
            return ResponseEntity.ok(app);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/stats")
    public ResponseEntity<?> getDashboardStats() {
        List<VisaApplication> apps = visaApplicationRepository.findAll();
        
        long total = apps.size();
        long pending = apps.stream().filter(a -> "SUBMITTED".equals(a.getStatus()) || "REVIEWING".equals(a.getStatus())).count();
        long approved = apps.stream().filter(a -> "APPROVED".equals(a.getStatus()) || "ISSUED".equals(a.getStatus())).count();
        long rejected = apps.stream().filter(a -> "REJECTED".equals(a.getStatus())).count();

        Map<String, Long> stats = new HashMap<>();
        stats.put("totalApplications", total);
        stats.put("pendingReview", pending);
        stats.put("approvedVisas", approved);
        stats.put("rejectedVisas", rejected);

        return ResponseEntity.ok(stats);
    }
}
