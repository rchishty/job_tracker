import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Contact[]>('/api/contacts');
  }

  getById(id: number) {
    return this.http.get<Contact>(`/api/contacts/${id}`);
  }

  create(contact: Contact) {
    return this.http.post<Contact>('/api/contacts', contact);
  }

  update(id: number, contact: Contact) {
    return this.http.put<Contact>(`/api/contacts/${id}`, contact);
  }

  delete(id: number) {
    return this.http.delete(`/api/contacts/${id}`);
  }
}
