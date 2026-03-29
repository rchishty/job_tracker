package com.jobtracker.repository;

import java.util.List;

import com.jobtracker.model.Interview;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.jobtracker.model.Application;

@Repository
public interface InterviewRepository extends JpaRepository<Interview, Long> {

    @Query("SELECT i FROM Interview i WHERE " +
        "i.application IN :applications"
    )
    List<Interview> findByApplications(
        @Param("applications") List<Application> applications
    );

    List<Interview> findByApplicationId(Long applicationId);
}
