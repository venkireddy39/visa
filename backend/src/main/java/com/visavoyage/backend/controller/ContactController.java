package com.visavoyage.backend.controller;

import com.visavoyage.backend.model.ContactMessage;
import com.visavoyage.backend.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactMessageRepository contactMessageRepository;

    @PostMapping
    public ResponseEntity<?> submitContactForm(@RequestBody ContactMessage message) {
        message.setSubmissionDate(LocalDateTime.now());
        ContactMessage saved = contactMessageRepository.save(message);
        return ResponseEntity.ok(saved);
    }
}
