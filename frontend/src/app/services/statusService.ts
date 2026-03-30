import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from '../models/status';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private baseUrl = `${environment.apiUrl}/api/statuses`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Status[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Status>(`${this.baseUrl}/${id}`)
  }

  create(status: Status) {
    return this.http.post<Status>(this.baseUrl, status)
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
