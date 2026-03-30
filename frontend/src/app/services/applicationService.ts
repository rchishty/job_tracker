import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from '../models/application';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private baseUrl = `${environment.apiUrl}/api/applications`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Application[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Application>(`${this.baseUrl}/${id}`);
  }

  create(application: Application) {
    return this.http.post<Application>(this.baseUrl, application);
  }

  update(id: number, application: Application) {
    return this.http.put<Application>(`${this.baseUrl}/${id}`, application);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
