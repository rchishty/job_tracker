package com.jobtracker.service;

import java.util.*;

import org.springframework.stereotype.Service;

import com.jobtracker.model.Contact;
import com.jobtracker.repository.ContactRepository;

@Service
public class ContactService {

    private final ContactRepository repo;

    public ContactService(ContactRepository repo) {
        this.repo = repo;
    }

    public List<Contact> getAllContacts() {
        return repo.findAll();
    }

    public Optional<Contact> getContactById(Long id) {
        return repo.findById(id);
    }

    public Contact createContact(Contact contact) {
        contact.setId(null);
        return repo.save(contact);
    }

    public Contact updateContact(Contact contact, Long id) {
        Contact curr = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found"));

        curr.setName(contact.getName());
        curr.setEmail(contact.getEmail());
        curr.setPhone(contact.getPhone());
        curr.setTitle(contact.getTitle());
        curr.setCompany(contact.getCompany());

        return repo.save(curr);
    }

    public void deleteContact(Long id) {
        repo.deleteById(id);
    }
}
