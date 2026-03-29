import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interview } from '../models/interview';

@Injectable({
  providedIn: 'root',
})
export class InterviewService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Interview[]>('/api/interviews');
  }

  getByApplicationId(applicationId: number) {
    return this.http.get<Interview[]>(`/api/applications/${applicationId}/interviews`);
  }

  getById(id: number) {
    return this.http.get<Interview>(`/api/interviews/${id}`);
  }

  create(interview: Interview) {
    return this.http.post<Interview>('/api/interviews', interview);
  }

  update(id: number, interview: Interview) {
    return this.http.put<Interview>(`/api/interviews/${id}`, interview);
  }

  delete(id: number) {
    return this.http.delete(`/api/interviews/${id}`);
  }
}
