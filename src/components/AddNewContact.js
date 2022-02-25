import React, { useState, useRef } from 'react';
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
  // const nameInputRef = useRef();
  // const lastNameInputRef = useRef();
  // const dateOfBirthInputRef = useRef();
  // const mobileInputRef = useRef();
  // const phoneInputRef = useRef();
  // const emailInputRef = useRef();
  // const pagerInputRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { logout } = useAuth();
  const { add } = useAuth();
  const [input, setInput] = useState('');
  // const [todos, setTodos] = useState([
  //   'Take dogs for a walk',
  //   'Take garbage out',
  // ]);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [mobile, setMobile] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pager, setPager] = useState('');

  // const addContact = (event) => {
  //   event.preventDefault();
  //   //setTodos([...todos, input]);
  //   const enteredName = nameInputRef.current.value;
  //   const enteredLastName = lastNameInputRef.current.value;
  //   const enteredDateOfBirth = dateOfBirthInputRef.current.value;
  //   const enteredMobile = mobileInputRef.current.value;
  //   const enteredPhone = phoneInputRef.current.value;
  //   const enteredEmail = emailInputRef.current.value;
  //   const enteredPager = pagerInputRef.current.value;
  //   setInput('');
  // };

  // function addContact() {
  //   return nameInputRef.current.value;
  // }

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
      navigate('/kontakt');
    } catch {
      setError('Failed to add contact');
    }
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                // ref={nameInputRef}
                required
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Last name:</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                // ref={lastNameInputRef}
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="Calendar">
            <Form.Label>Date of birth:</Form.Label>
            <Form.Control
              type="date"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              // ref={dateOfBirthInputRef}
            />
          </Form.Group>

          <Col className="mb-3">
            <Form.Group>
              <Form.Label>Mobile:</Form.Label>
              <Form.Control
                type="number"
                name="mobile"
                placeholder="Enter your mobile phone number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                // ref={mobileInputRef}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                // ref={phoneInputRef}
              />
            </Form.Group>
            <br />

            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email adress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // ref={emailInputRef}
              />
            </Form.Group>
            <br />

            <Form.Group>
              <Form.Label>Pager:</Form.Label>
              <Form.Control
                type="number"
                name="pager"
                placeholder="Enter your pager number"
                value={pager}
                onChange={(e) => setPager(e.target.value)}
                // ref={pagerInputRef}
              />
            </Form.Group>
            <br />
          </Col>
          <Button
            //disabled={!input}
            variant="success"
            type="submit"
            className="btn btn-primary"
            //  onClick={addContact}
          >
            Add contact
          </Button>
        </Form>
        <ul>
          <li>
            Name: {name} {lastName}
          </li>
          <li>Date of Birth: {dateOfBirth}</li>
          <li>Mobile: {mobile}</li>
          <li>Phone: {phone}</li>
          <li>Email: {email}</li>
          <li>Pager: {pager}</li>
        </ul>
      </div>
    </>
  );
}
