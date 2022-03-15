import React from 'react';
import Contact from './Contact';
import { Table, Card } from 'react-bootstrap';
import Heading from './Navbar';

const ContactList = ({ contacts }) => {
  //const [contacts, setContacts] = useState(data);

  return (
    <>
      <Heading />
      <br />
      <div>
        <Card body>
          <Card.Title>Adress Book</Card.Title>
          <input type="text" placeholder="Search" />
        </Card>
      </div>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Contact</th>
            {/* <th>Last Name</th> */}
            {/* <th>Date of birth</th> */}
            <th>Mobile</th>
            {/* <th>Phone</th>
            <th>Email</th>
            <th>Pager</th> */}
            <th>Options</th>
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
