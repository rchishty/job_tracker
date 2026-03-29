package com.jobtracker.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.time.temporal.ChronoUnit;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.jobtracker.dto.ReportResponse;
import com.jobtracker.repository.ApplicationRepository;
import com.jobtracker.repository.InterviewRepository;
import com.jobtracker.model.Application;
import com.jobtracker.model.Interview;

@Service
public class ReportService {

    private final InterviewRepository interviewRepo;
    private final ApplicationRepository appRepo;

    public ReportService(InterviewRepository interviewRepo, ApplicationRepository appRepo) {
        this.interviewRepo = interviewRepo;
        this.appRepo = appRepo;
    }

    public ReportResponse getReport(LocalDate startDate, LocalDate endDate, Long companyId, Long statusId) {
        List<Application> apps = appRepo.findByFilters(startDate, endDate, companyId, statusId);

        List<Interview> interviews = interviewRepo.findByApplications(apps);

        long total = apps.size();


        long accepted = apps.stream()
            .filter(a -> a.getStatus() != null && a.getStatus().getName().equals("Offer Extended"))
            .count();
        double acceptanceRate = total == 0 ? 0 : (accepted * 100) / total;


        Map<Long, LocalDateTime> firstInterviews = interviews.stream()
        .collect(Collectors.toMap(
            i -> i.getApplication().getId(),
            Interview::getInterviewDate,
            (d1, d2) -> d1.isBefore(d2) ? d1 : d2
        ));
        double avgDays = apps.stream()
            .filter(a -> firstInterviews.containsKey(a.getId()))
            .mapToLong(a -> ChronoUnit.DAYS.between(
                a.getDateApplied(),
                firstInterviews.get(a.getId()).toLocalDate()
            ))
            .average()
            .orElse(0);
        
        
        Map<String, Long> statusBreakdown = apps.stream()
        .filter(a -> a.getStatus() != null)
        .collect(Collectors.groupingBy(
            a -> a.getStatus().getName(),
            Collectors.counting()
        ));

        return new ReportResponse(apps, total, acceptanceRate, avgDays, statusBreakdown);
    }
}
