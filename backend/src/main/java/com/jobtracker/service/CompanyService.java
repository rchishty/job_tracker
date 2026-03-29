package com.jobtracker.service;

import java.util.*;

import org.springframework.stereotype.Service;

import com.jobtracker.model.Company;
import com.jobtracker.repository.CompanyRepository;

@Service
public class CompanyService {

    private final CompanyRepository repo;

    public CompanyService(CompanyRepository repo) {
        this.repo = repo;
    }

    public List<Company> getAllCompanies() {
        return repo.findAll();
    }

    public Optional<Company> getCompanyById(Long id) {
        return repo.findById(id);
    }

    public Company createCompany(Company company) {
        return repo.save(company);
    }

    public Company updateCompany(Company company, Long id) {
        Company curr = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Company not found"));

        curr.setName(company.getName());
        curr.setLocation(company.getLocation());
        curr.setIndustry(company.getIndustry());

        return repo.save(curr);
    }

    public void deleteCompany(Long id) {
        repo.deleteById(id);
    }
}
