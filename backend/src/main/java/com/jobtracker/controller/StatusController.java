package com.jobtracker.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;
import com.jobtracker.model.Status;
import com.jobtracker.service.StatusService;

@RestController
@RequestMapping("/api/statuses")
public class StatusController {

    private final StatusService service;

    public StatusController(StatusService service) {
        this.service = service;
    }

    @GetMapping
    public List<Status> getAllStatuses() {
        return service.getAllStatuses();
    }

    @GetMapping("/{id}")
    public Optional<Status> getStatusById(@PathVariable Long id) {
        return service.getStatusById(id);
    }

    @PostMapping
    public Status createStatus(@RequestBody Status status) {
        return service.createStatus(status);
    }

    @DeleteMapping("/{id}")
    public void deleteStatus(@PathVariable Long id) {
        service.deleteStatus(id);
    }
}