import React from 'react';
import Contact from './Contact';
import { Table } from 'react-bootstrap';
import AddNewContact from './AddNewContact';
import addContact from './AddNewContact';

export const contacts = [
  {
    id: 1,
    name: 'Tom',
    lastName: 'Hardy',
    mobile: '0915464578',
    phone: '12',
    email: 'tomica@gmail.com',
    pager: '322',
  },
  {
    id: 2,
    name: 'Pero',
    lastName: 'Perić',
    mobile: '09154634438',
    phone: '231',
    email: 'perica@gmail.com',
    pager: '123456789',
  },
  {
    id: 3,
    name: 'Maja',
    lastName: 'Majić',
    mobile: '0981264578',
    phone: '98765433',
    email: 'maja@gmail.com',
    pager: '',
  },
  {
    id: 4,
    name: 'Tonka',
    lastName: 'Tonić',
    mobile: '099498578',
    phone: '',
    email: 'tonka@gmail.com',
    pager: '',
  },
];

export default function ContactList() {
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
