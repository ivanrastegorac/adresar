import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import {  Link } from "react-router-dom"

export default function Adresar() {
  const navigate = useNavigate();
  const [ error, setError ] = useState("");
  const { logout } = useAuth();

  async function handleLogout() {
    setError('')

    try {
      await logout()
      navigate('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    <>
      <Navbar bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to={"/adresar"}>Adresar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/adresar"}>Početna</Nav.Link>
              <Nav.Link as={Link} to={"/kontakt"}>Novi kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="">
            <Button variant="link" onClick={handleLogout}>
              Odjavi se
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
