package com.jobtracker.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;
import com.jobtracker.model.Contact;
import com.jobtracker.service.ContactService;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    private final ContactService service;

    public ContactController(ContactService service) {
        this.service = service;
    }

    @GetMapping
    public List<Contact> getAllContacts() {
        return service.getAllContacts();
    }

    @GetMapping("/{id}")
    public Optional<Contact> getContactById(@PathVariable Long id) {
        return service.getContactById(id);
    }

    @PostMapping
    public Contact createContact(@RequestBody Contact contact) {
        return service.createContact(contact);
    }

    @PutMapping("/{id}")
    public Contact updateContact(@RequestBody Contact contact, @PathVariable Long id) {
        return service.updateContact(contact, id);
    }

    @DeleteMapping("/{id}")
    public void deleteContact(@PathVariable Long id) {
        service.deleteContact(id);
    }
}