# Cloud-Native Job Application Tracker

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)


## Overview
The Job Application Tracker is a full-stack, microservices-style web application designed to manage the job hunt process. Built with an emphasis on enterprise-scale engineering, the project features a decoupled frontend and backend containerized via Docker and deployed in a serverless environment on Google Cloud Platform (GCP). 

This project demonstrates proficiency in automated CI/CD pipelines, secure database proxying, and cross-origin resource security.

---

## Architecture & Tech Stack

### Frontend
* **Framework:** Angular & TypeScript
* **Server:** Nginx (Configured for static file serving and SPA routing)
* **Deployment:** Containerized and hosted on GCP Cloud Run

### Backend API
* **Framework:** Java 17 & Spring Boot (Spring Web, Spring Data JPA)
* **Architecture:** RESTful API with global CORS configuration (`WebMvcConfigurer`)
* **Deployment:** Containerized and hosted on GCP Cloud Run

### Database & Infrastructure
* **Database:** Google Cloud SQL (MySQL)
* **Security:** Zero-trust database connectivity utilizing the Cloud SQL Auth Proxy via Unix sockets. No public IP is exposed.
* **CI/CD:** Automated build and deployment pipelines using Google Cloud Build, triggered via GitHub Webhooks upon pushes to the `main` branch.

---

## Key Features & Engineering Highlights

1. **Serverless Execution:** Both the frontend and backend are deployed as stateless Docker containers on Cloud Run, allowing them to scale from zero to handle network traffic dynamically.
2. **Automated CI/CD:** Source code is linked directly to Google Cloud Build. Pushing code to the `main` branch triggers an automated build, containerization, and zero-downtime deployment process.
3. **Secure Data Pipeline:** The Spring Boot API does not use traditional username/password over the public internet to connect to the database. It utilizes IAM Service Accounts and a secure socket proxy tunnel, drastically reducing the attack surface.
4. **Decoupled Architecture:** The Angular frontend communicates with the Java backend strictly via REST API endpoints. Cross-Origin Resource Sharing (CORS) is strictly defined to only allow traffic from the validated frontend Cloud Run domain.

---

## Local Development Setup

To run this application locally for development or testing:

### Prerequisites
* Java 17+
* Node.js & npm
* MySQL Server (running locally on port 3306)
* Docker (optional, for local container testing)
