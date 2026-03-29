package com.jobtracker.model;

import jakarta.persistence.*;

@Entity
@Table(name = "applications")
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "position_title", nullable = false)
    private String positionTitle;

    @Column(name = "date_applied", nullable = false)
    private java.time.LocalDate dateApplied;

    @Column(precision = 10, scale = 2)
    private java.math.BigDecimal salary;

    @Column(columnDefinition = "TEXT")
    private String notes;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status status;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    public Application() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getPositionTitle() { return positionTitle; }
    public void setPositionTitle(String positionTitle) { this.positionTitle = positionTitle; }

    public java.time.LocalDate getDateApplied() { return dateApplied; }
    public void setDateApplied(java.time.LocalDate dateApplied) { this.dateApplied = dateApplied; }

    public java.math.BigDecimal getSalary() { return salary; }
    public void setSalary(java.math.BigDecimal salary) { this.salary = salary; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }

    public Status getStatus() { return status; }
    public void setStatus(Status status) { this.status = status; }

    public Company getCompany() { return company; }
    public void setCompany(Company company) { this.company = company; }
}