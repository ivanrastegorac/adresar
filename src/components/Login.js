import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const [passwordError, setPasswordError] = useState(passVerificationError);

  // const initialState = {
  //   name: '',
  //   password: ''
  // }

  // const LoginForm = () => {
  //   const [newUser, setNewUser] = useState(initialState);

  //   // function handleOnChange = (e) => {
  //   //   const { email, value } = e.target

  //   //   setNewUser({...newUser, [email]: value});
  //   // }

  //   // }
  // }

  // const passVerificationError = {
  //   isLenthy: false,
  //   hasUpper: false,
  //   hasLower: false,
  //   hasNumber: false,
  //   hasSpcChr: false
  // };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/home');
    } catch (err) {
      console.log(err);
      setError('Failed to Log In');
    }
    setLoading(false);
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <Card>
          <Card.Body>
            <h1 className="text-center mb-4">Adresar AG04</h1>
          </Card.Body>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  ref={emailRef}
                  required
                />
              </Form.Group>
              <br />
              <Form.Group id="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  ref={passwordRef}
                  required
                />
              </Form.Group>
              <br />

              {/* <ul className="mb-4">
                <li className={passwordError.isLenthy ? "text-succes" : "text-danger"}>Najmanje 6 znakova</li>
                <li className={passwordError.hasUpper ? "text-succes" : "text-danger"}>Najmanje jedno veliko slovo</li>
                <li className={passwordError.hasLower ? "text-succes" : "text-danger"}>Najmanje jedno malo slovo</li>
                <li className={passwordError.hasNumber ? "text-succes" : "text-danger"}>Najmanje jedan broj</li>
                <li className={passwordError.hasSpcChr ? "text-succes" : "text-danger"}>Najmanje jedan poseban znak, npr. !?@#$%&</li>
              </ul> */}

              <br />
              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
