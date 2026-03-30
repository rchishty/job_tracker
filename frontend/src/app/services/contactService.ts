import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private baseUrl = `${environment.apiUrl}/api/contacts`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Contact[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Contact>(`${this.baseUrl}/${id}`);
  }

  create(contact: Contact) {
    return this.http.post<Contact>(this.baseUrl, contact);
  }

  update(id: number, contact: Contact) {
    return this.http.put<Contact>(`${this.baseUrl}/${id}`, contact);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
