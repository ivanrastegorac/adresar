import React, { useState } from 'react';
import Login from './Login';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddNewContact from './AddNewContact';
import Favorites from './Favorites';
import ContactList from './ContactList';
import Home from './Home';
import data from '../mock-data.json';

function App() {
  const [contacts, setContacts] = useState(data);

  return (
    <Container>
      <div className="w-auto" style={{ maxWidth: '5000px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/favoriti" element={<Favorites />} />
              <Route path="/" element={<Login />} />
              <Route
                path="/kontakt"
                element={
                  <AddNewContact
                    contacts={contacts}
                    onSetContacts={setContacts}
                  />
                }
              />
              <Route
                path="/adresar"
                element={<ContactList contacts={contacts} />}
              />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
