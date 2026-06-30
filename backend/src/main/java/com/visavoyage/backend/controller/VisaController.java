package com.visavoyage.backend.controller;

import com.visavoyage.backend.model.VisaApplication;
import com.visavoyage.backend.repository.VisaApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Optional;

@RestController
@RequestMapping("/api/visa")
public class VisaController {

    @Autowired
    private VisaApplicationRepository visaApplicationRepository;

    @PostMapping("/submit")
    public ResponseEntity<?> submitVisaApplication(@RequestBody VisaApplication application) {
        // Generate random unique tracking code
        String trackingId = "VV-" + (int)(Math.random() * 900000 + 100000);
        application.setTrackingId(trackingId);
        application.setStatus("SUBMITTED");
        application.setSubmissionDate(LocalDate.now());

        VisaApplication saved = visaApplicationRepository.save(application);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/track/{trackingId}")
    public ResponseEntity<?> trackApplication(@PathVariable String trackingId) {
        Optional<VisaApplication> application = visaApplicationRepository.findByTrackingId(trackingId);
        
        if (application.isPresent()) {
            return ResponseEntity.ok(application.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
