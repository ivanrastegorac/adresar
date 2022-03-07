import React from 'react';
import Login from './Login';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Adresar from './Adresar';
import AddNewContact from './AddNewContact';
import Favorites from './Favorites';
import ContactList from './ContactList';
import Home from './Home';

function App() {
  return (
    <Container>
      <div className="w-auto" style={{ maxWidth: '5000px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/favoriti" element={<Favorites />} />
              <Route path="/" element={<Login />} />
              <Route path="/kontakt" element={<AddNewContact />} />
              <Route path="/adresar" element={<ContactList />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
