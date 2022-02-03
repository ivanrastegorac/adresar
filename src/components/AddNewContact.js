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

export default function Adresar() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { logout } = useAuth();
  const { add } = useAuth();
  const [input, setInput] = useState('');

  async function handleLogout() {
    setError('');

    try {
      await logout();
      navigate('/');
    } catch {
      setError('Failed to log out');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setInput([input]);
      navigate('/adresar');
    } catch {
      setError('Failed to add contact');
    }
    console.log('Contact added!');
  }

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
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                // value={input}
                // onChange={(event) => setInput(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last name:</Form.Label>
              <Form.Control
                type="text"
                name="last name"
                placeholder="Last name"
                // value={input}
                // onChange={(event) => setInput(event.target.value)}
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="Calendar">
            <Form.Label>Date of birth:</Form.Label>
            <Form.Control type="date" name="dateOfBirth" />
          </Form.Group>

          <Col className="mb-3">
            <Form.Group>
              <Form.Label>Mobile:</Form.Label>
              <Form.Control
                type="number"
                name="mobile"
                placeholder="Enter your mobile phone number"
                // value={input}
                // onChange={(event) => setInput(event.target.value)}
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
                // value={input}
                // onChange={(event) => setInput(event.target.value)}
              />
            </Form.Group>
            <br />

            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email adress"
                // value={input}
                // onChange={(event) => setInput(event.target.value)}
              />
            </Form.Group>
            <br />

            <Form.Group>
              <Form.Label>Pager:</Form.Label>
              <Form.Control
                type="number"
                name="pager"
                placeholder="Enter your pager number"
                // value={input}
                // onChange={(event) => setInput(event.target.value)}
              />
            </Form.Group>
            <br />
          </Col>
          <Button
            variant="success"
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Add contact
          </Button>
        </Form>
      </div>
    </>
  );
}
