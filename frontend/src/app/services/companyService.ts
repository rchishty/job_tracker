import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private baseUrl = `${environment.apiUrl}/api/companies`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Company[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Company>(`${this.baseUrl}/${id}`);
  }

  create(company: Company) {
    return this.http.post<Company>(this.baseUrl, company);
  }

  update(id: number, company: Company) {
    return this.http.put<Company>(`${this.baseUrl}/${id}`, company);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
