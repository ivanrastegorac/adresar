import React from 'react';
import Contact from './Contact';
import { Table } from 'react-bootstrap';
import Heading from './Navbar';

const ContactList = ({ contacts }) => {
  // const [contacts, setContacts] = useState(data);

  return (
    <>
      <Heading />
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
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
};

export default ContactList;
