package com.jobtracker.controller;

import java.time.LocalDate;

import org.springframework.web.bind.annotation.*;

import com.jobtracker.dto.ReportResponse;
import com.jobtracker.service.ReportService;


@RestController
@RequestMapping("/api/report")
public class ReportController {
    private final ReportService report;

    public ReportController(ReportService report) {
        this.report = report;
    }

    @GetMapping
    public ReportResponse getReport(
        @RequestParam(required = false) LocalDate startDate,
        @RequestParam(required = false) LocalDate endDate,
        @RequestParam(required = false) Long companyId,
        @RequestParam(required = false) Long statusId
    ) {
        return report.getReport(startDate, endDate, companyId, statusId);
    }
    
}
