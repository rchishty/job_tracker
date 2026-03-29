import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from '../models/application';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Application[]>('/api/applications');
  }

  getById(id: number) {
    return this.http.get<Application>(`/api/applications/${id}`);
  }

  create(application: Application) {
    return this.http.post<Application>('/api/applications', application);
  }

  update(id: number, application: Application) {
    return this.http.put<Application>(`/api/applications/${id}`, application);
  }

  delete(id: number) {
    return this.http.delete(`/api/applications/${id}`);
  }
}
