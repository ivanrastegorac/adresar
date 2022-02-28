import React, { useState } from 'react';
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  Row,
  Col,
} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import data from '../mock-data.json';

export default function Adresar() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { logout } = useAuth();
  //const { add } = useAuth();
  //const [input, setInput] = useState('');
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: '',
    lastName: '',
    dateOfBirth: '',
    mobile: '',
    phone: '',
    email: '',
    pager: '',
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      lastName: addFormData.lastName,
      dateOfBirth: addFormData.dateOfBirth,
      mobile: addFormData.mobile,
      phone: addFormData.phone,
      email: addFormData.email,
      pager: addFormData.pager,
    };
    console.log(newContact);

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  async function handleLogout() {
    setError('');

    try {
      await logout();
      navigate('/');
    } catch {
      setError('Failed to log out');
    }
  }

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   try {
  //     setInput([input]);
  //     navigate('/kontakt');
  //   } catch {
  //     setError('Failed to add contact');
  //   }
  // }

  return (
    <>
      <Navbar bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to={'/adresar'}>
            Adresar AG04
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/adresar'}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={'/kontakt'}>
                Add new contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="">
            <Button variant="link" onClick={handleLogout}>
              Sign out
            </Button>
          </div>
        </Container>
      </Navbar>
      <div>
        <Form onSubmit={handleAddFormSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleAddFormChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last name:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={handleAddFormChange}
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="Calendar">
            <Form.Label>Date of birth:</Form.Label>
            <Form.Control
              type="date"
              name="dateOfBirth"
              onChange={handleAddFormChange}
            />
          </Form.Group>

          <Col className="mb-3">
            <Form.Group>
              <Form.Label>Mobile:</Form.Label>
              <Form.Control
                type="number"
                name="mobile"
                placeholder="Enter your mobile phone number"
                onChange={handleAddFormChange}
                required
              />
            </Form.Group>
            <br />

            <Form.Group>
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                placeholder="Enter your phone number"
                onChange={handleAddFormChange}
              />
            </Form.Group>
            <br />

            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email adress"
                onChange={handleAddFormChange}
              />
            </Form.Group>
            <br />

            <Form.Group>
              <Form.Label>Pager:</Form.Label>
              <Form.Control
                type="number"
                name="pager"
                placeholder="Enter your pager number"
                onChange={handleAddFormChange}
              />
            </Form.Group>
            <br />
          </Col>
          <Button
            //disabled={!input}
            variant="success"
            type="submit"
            className="btn btn-primary"
            onClick={handleAddFormSubmit}
          >
            Add contact
          </Button>
        </Form>
      </div>
    </>
  );
}
