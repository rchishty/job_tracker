package com.jobtracker.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;
import com.jobtracker.model.Company;
import com.jobtracker.service.CompanyService;

@RestController
@RequestMapping("/api/companies")
public class CompanyController {

    private final CompanyService service;

    public CompanyController(CompanyService service) {
        this.service = service;
    }

    @GetMapping
    public List<Company> getAllCompanies() {
        return service.getAllCompanies();
    }

    @GetMapping("/{id}")
    public Optional<Company> getCompanyById(@PathVariable Long id) {
        return service.getCompanyById(id);
    }

    @PostMapping
    public Company createCompany(@RequestBody Company company) {
        return service.createCompany(company);
    }

    @PutMapping("/{id}")
    public Company updateCompany(@RequestBody Company company, @PathVariable Long id) {
        return service.updateCompany(company, id);
    }

    @DeleteMapping("/{id}")
    public void deleteCompany(@PathVariable Long id) {
        service.deleteCompany(id);
    }
}