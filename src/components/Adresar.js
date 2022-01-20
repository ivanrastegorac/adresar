import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Adresar() {
    function handleLogout(){

    }

  return (
      <>
      <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
        </Card.Body>
      </Card>
        <div className="w-100 text-center mt-2">
             <Button variant="link" onClick={handleLogout}>Log Out</Button>
        </div>
      </>
  )
}
