import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interview } from '../models/interview';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InterviewService {
  private baseUrl = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Interview[]>(`${this.baseUrl}/interviews`);
  }

  getByApplicationId(applicationId: number) {
    return this.http.get<Interview[]>(`${this.baseUrl}/applications/${applicationId}/interviews`);
  }

  getById(id: number) {
    return this.http.get<Interview>(`${this.baseUrl}/interviews/${id}`);
  }

  create(interview: Interview) {
    return this.http.post<Interview>(`${this.baseUrl}/interviews`, interview);
  }

  update(id: number, interview: Interview) {
    return this.http.put<Interview>(`${this.baseUrl}/interviews/${id}`, interview);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/interviews/${id}`);
  }
}
