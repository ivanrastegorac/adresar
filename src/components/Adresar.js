// import React, { useState } from 'react';
// import { Navbar, Container, Nav, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router';
// import { useAuth } from '../contexts/AuthContext';
// import { Link } from 'react-router-dom';
// import ContactList from './ContactList';

// // export default function Adresar() {
// //   const navigate = useNavigate();
// //   const [error, setError] = useState('');
// //   const { logout } = useAuth();

// //   async function handleLogout() {
// //     setError('');

// //     try {
// //       await logout();
// //       navigate('/');
// //     } catch {
// //       setError('Failed to log out');
// //     }
// //   }

// //   return (
// //     <>
// //       <Navbar bg="light" variant="light" sticky="top">
// //         <Container>
// //           <Navbar.Brand as={Link} to={'/adresar'}>
// //             Adresar AG04
// //           </Navbar.Brand>
// //           <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //           <Navbar.Collapse id="basic-navbar-nav">
// //             <Nav className="me-auto">
// //               <Nav.Link as={Link} to={'/adresar'}>
// //                 Home
// //               </Nav.Link>
// //               <Nav.Link as={Link} to={'/kontakt'}>
// //                 Add new contact
// //               </Nav.Link>
// //             </Nav>
// //           </Navbar.Collapse>
// //           <div className="">
// //             <Button variant="link" onClick={handleLogout}>
// //               Sign out
// //             </Button>
// //           </div>
// //         </Container>
// //       </Navbar>
// //       <ContactList />
// //     </>
// //   );
// // }

// const Adresar = () => {
//   const navigate = useNavigate();
//   const [error, setError] = useState('');
//   const { logout } = useAuth();

//   async function handleLogout() {
//     setError('');

//     try {
//       await logout();
//       navigate('/');
//     } catch {
//       setError('Failed to log out');
//     }
//   }

//   return (
//     <>
//       <Navbar bg="light" variant="light" sticky="top">
//         <Container>
//           <Navbar.Brand as={Link} to={'/adresar'}>
//             Adresar AG04
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link as={Link} to={'/adresar'}>
//                 Home
//               </Nav.Link>
//               <Nav.Link as={Link} to={'/kontakt'}>
//                 Add new contact
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//           <div className="">
//             <Button variant="link" onClick={handleLogout}>
//               Sign out
//             </Button>
//           </div>
//         </Container>
//       </Navbar>
//       <ContactList />
//     </>
//   );
// };

// export default Adresar;
