package com.jobtracker.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;
import com.jobtracker.model.Application;
import com.jobtracker.model.Interview;
import com.jobtracker.service.ApplicationService;
import com.jobtracker.service.InterviewService;

@RestController
@RequestMapping("/api/applications")
public class ApplicationController {

    private final ApplicationService service;
    private final InterviewService interviewService;

    public ApplicationController(ApplicationService service, InterviewService interviewService) {
        this.service = service;
        this.interviewService = interviewService;
    }

    // GET API
    @GetMapping
    public List<Application> getAllApplications() {
        return service.getAllApplications();
    }

    // GET by ID API
    @GetMapping("/{id}")
    public Optional<Application> getApplicationById(@PathVariable Long id) {
        return service.getApplicationById(id);
    }

    // POST API
    @PostMapping()
    public Application createApplication(@RequestBody Application application) {
        return service.createApplication(application);
    }

    // PUT API
    @PutMapping("/{id}")
    public Application updateApplication(@RequestBody Application application, @PathVariable Long id) {
        return service.updateApplication(application, id);
    }

    // DELETE API
    @DeleteMapping("/{id}")
    public void deleteApplication(@PathVariable Long id) {
        service.deleteApplication(id);
    }

    // GET interviews for an application
    @GetMapping("/{id}/interviews")
    public List<Interview> getInterviewsByApplication(@PathVariable Long id) {
        return interviewService.getInterviewsByApplicationId(id);
    }
}
