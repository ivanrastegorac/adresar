import React from 'react';
import Login from './Login';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Adresar from './Adresar';
import AddNewContact from './AddNewContact';

function App() {
  return (
    <Container>
      <div className="w-auto" style={{ maxWidth: '5000px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/adresar" element={<Adresar />} />
              <Route path="/" element={<Login />} />
              <Route path="/kontakt" element={<AddNewContact />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
