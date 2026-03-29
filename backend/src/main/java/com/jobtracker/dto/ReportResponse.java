package com.jobtracker.dto;

import com.jobtracker.model.Application;
import java.util.List;
import java.util.Map;

public class ReportResponse {
    List<Application> apps;
    long total;
    double acceptanceRate;
    double avgResponseTimeDays;
    Map<String, Long> statusBreakdown;

    public ReportResponse(List<Application> apps,
                        long total,
                        double acceptanceRate,
                        double avgResponseTimeDays,
                        Map<String, Long> statusBreakdown) {

        this.apps = apps;
        this.total = total;
        this.acceptanceRate = acceptanceRate;
        this.avgResponseTimeDays = avgResponseTimeDays;
        this.statusBreakdown = statusBreakdown;
    }

    public List<Application> getApps() { return apps; }
    public long getTotal() { return total; }
    public double getAcceptanceRate() { return acceptanceRate; }
    public double getAvgResponseTimeDays() { return avgResponseTimeDays; }
    public Map<String, Long> getStatusBreakdown() { return statusBreakdown; }
}
