package com.jobtracker.service;

import java.util.*;

import org.springframework.stereotype.Service;

import com.jobtracker.model.Application;
import com.jobtracker.repository.ApplicationRepository;

@Service
public class ApplicationService {

    private final ApplicationRepository repo;

    public ApplicationService(ApplicationRepository repo) {
        this.repo = repo;
    }
    
    public List<Application> getAllApplications() {
        return repo.findAll();
    }

    public Optional<Application> getApplicationById(Long id) {
        return repo.findById(id);
    }

    public Application createApplication(Application app) {
        app.setId(null);
        return repo.save(app);
    }

    public Application updateApplication(Application app, Long appId) {
        Application currApp = repo.findById(appId)
                .orElseThrow(() -> new RuntimeException("Application not found"));

        currApp.setCompany(app.getCompany());
        currApp.setDateApplied(app.getDateApplied());
        currApp.setNotes(app.getNotes());
        currApp.setPositionTitle(app.getPositionTitle());
        currApp.setSalary(app.getSalary());
        currApp.setStatus(app.getStatus());

        return repo.save(currApp);
    }

    public void deleteApplication(Long id) {
        repo.deleteById(id);
    }
}
