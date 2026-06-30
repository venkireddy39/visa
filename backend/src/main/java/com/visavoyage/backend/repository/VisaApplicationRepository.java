package com.visavoyage.backend.repository;

import com.visavoyage.backend.model.VisaApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VisaApplicationRepository extends JpaRepository<VisaApplication, Long> {
    Optional<VisaApplication> findByTrackingId(String trackingId);
}
