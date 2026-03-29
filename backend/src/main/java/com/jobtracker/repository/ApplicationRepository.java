package com.jobtracker.repository;

import com.jobtracker.model.Application;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {

    @Query("SELECT a FROM Application a WHERE " +
        "(:startDate IS NULL OR a.dateApplied >= :startDate) AND " +
        "(:endDate IS NULL OR a.dateApplied <= :endDate) AND " +
        "(:companyId IS NULL OR a.company.id = :companyId) AND " +
        "(:statusId IS NULL OR a.status.id = :statusId)")
    List<Application> findByFilters(
        @Param("startDate") LocalDate startDate,
        @Param("endDate") LocalDate endDate,
        @Param("companyId") Long companyId,
        @Param("statusId") Long statusId
    );
}
