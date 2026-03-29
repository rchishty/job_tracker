package com.jobtracker.service;

import java.util.*;

import org.springframework.stereotype.Service;

import com.jobtracker.model.Status;
import com.jobtracker.repository.StatusRepository;

@Service
public class StatusService {

    private final StatusRepository repo;

    public StatusService(StatusRepository repo) {
        this.repo = repo;
    }

    public List<Status> getAllStatuses() {
        return repo.findAll();
    }

    public Optional<Status> getStatusById(Long id) {
        return repo.findById(id);
    }

    public Status createStatus(Status status) {
        return repo.save(status);
    }

    public void deleteStatus(Long id) {
        repo.deleteById(id);
    }
}
