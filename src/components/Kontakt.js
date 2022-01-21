import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function Adresar() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { logout } = useAuth();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <>
      <Navbar bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to={'/adresar'}>
            Adresar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/adresar'}>
                Početna
              </Nav.Link>
              <Nav.Link as={Link} to={'/kontakt'}>
                Novi kontakt
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="">
            <Button variant="link" onClick={handleLogout}>
              Odjavi se
            </Button>
          </div>
        </Container>
      </Navbar>
      <div>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} >
              <Form.Label>Ime:</Form.Label>
              <Form.Control type="text" placeholder="Ime" required/>
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Label>Prezime:</Form.Label>
              <Form.Control type="text" placeholder="Prezime" required/>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="Calendar">
            <Form.Label>Datum rođenja:</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Col className="mb-3">
            <Form.Group>
              <Form.Label>Mobitel:</Form.Label>
              <Form.Control type="number" required/>
            </Form.Group><br/>

            <Form.Group >
              <Form.Label>Fiksni telefon:</Form.Label>
              <Form.Control type="number" />
            </Form.Group><br/>

            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Upišite mail adresu" />
            </Form.Group><br/>
          </Col>
          <Button variant="primary" type="submit">
            Dodaj
          </Button>
        </Form>
      </div>
    </>
  );
}
