package com.jobtracker.service;

import java.util.*;

import org.springframework.stereotype.Service;

import com.jobtracker.model.Interview;
import com.jobtracker.repository.InterviewRepository;

@Service
public class InterviewService {

    private final InterviewRepository repo;

    public InterviewService(InterviewRepository repo) {
        this.repo = repo;
    }

    public List<Interview> getAllInterviews() {
        return repo.findAll();
    }

    public List<Interview> getInterviewsByApplicationId(Long applicationId) {
        return repo.findByApplicationId(applicationId);
    }

    public Optional<Interview> getInterviewById(Long id) {
        return repo.findById(id);
    }

    public Interview createInterview(Interview interview) {
        return repo.save(interview);
    }

    public Interview updateInterview(Interview interview, Long id) {
        Interview curr = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Interview not found"));

        curr.setApplication(interview.getApplication());
        curr.setInterviewDate(interview.getInterviewDate());
        curr.setInterviewType(interview.getInterviewType());
        curr.setNotes(interview.getNotes());
        curr.setContact(interview.getContact());

        return repo.save(curr);
    }

    public void deleteInterview(Long id) {
        repo.deleteById(id);
    }
}
