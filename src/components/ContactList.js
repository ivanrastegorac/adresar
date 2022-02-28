import React, { useState } from 'react';
import Contact from './Contact';
import { Table } from 'react-bootstrap';
import data from '../mock-data.json';

export default function ContactList() {
  const [contacts, setContacts] = useState(data);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Mobile</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Pager</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <Contact contact={contact} />
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
