package com.jobtracker.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;
import com.jobtracker.model.Interview;
import com.jobtracker.service.InterviewService;

@RestController
@RequestMapping("/api/interviews")
public class InterviewController {

    private final InterviewService service;

    public InterviewController(InterviewService service) {
        this.service = service;
    }

    @GetMapping
    public List<Interview> getAllInterviews() {
        return service.getAllInterviews();
    }

    @GetMapping("/{id}")
    public Optional<Interview> getInterviewById(@PathVariable Long id) {
        return service.getInterviewById(id);
    }

    @PostMapping
    public Interview createInterview(@RequestBody Interview interview) {
        return service.createInterview(interview);
    }

    @PutMapping("/{id}")
    public Interview updateInterview(@RequestBody Interview interview, @PathVariable Long id) {
        return service.updateInterview(interview, id);
    }

    @DeleteMapping("/{id}")
    public void deleteInterview(@PathVariable Long id) {
        service.deleteInterview(id);
    }
}