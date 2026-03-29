import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  constructor(private http: HttpClient) {}
  
  getAll() {
    return this.http.get<Status[]>('/api/statuses');
  }

  getById(id: number) {
    return this.http.get<Status>(`/api/statuses/${id}`)
  }

  create(status: Status) {
    return this.http.post<Status>("/api/statuses", status)
  }

  delete(id: number) {
    return this.http.delete(`/api/statuses/${id}`)
  }
}
