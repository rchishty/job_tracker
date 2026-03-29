import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Company[]>('/api/companies');
  }

  getById(id: number) {
    return this.http.get<Company>(`/api/companies/${id}`);
  }

  create(company: Company) {
    return this.http.post<Company>('/api/companies', company);
  }

  update(id: number, company: Company) {
    return this.http.put<Company>(`/api/companies/${id}`, company);
  }

  delete(id: number) {
    return this.http.delete(`/api/companies/${id}`);
  }
}
