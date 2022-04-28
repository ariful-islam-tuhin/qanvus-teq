import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { Link } from "react-router-dom";
import './Header.css';
import Wave from 'react-wavify';

const Header = () => {
  const { user, logout } = useAuth();
  // console.log(user)


  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="header p-1"
        variant="light"
        sticky="top"
      >
        <Navbar.Brand as={Link} to="/">
          Qanvus Technologies Private Limited Task
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className="home"  >
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/dashboard" className="home">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="home">
              Register
            </Nav.Link>
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
            {
              user?.email ? <button style={{ paddingLeft: '30px', paddingRight: '30px', border: 'none', borderRadius: '20px' }} onClick={logout}>logout</button>
                :
                <Nav.Link style={{ border: 'none', Color:'black', borderRadius: '20px' }} as={Link} to="/login" className="home">
                  Login
                </Nav.Link>
            }


          </Nav>
        </Navbar.Collapse>
      
      </Navbar>
      <Wave style={{height:'50px', marginTop:'-200px'}} fill="url(#gradient)">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(500)">
            <stop offset="0%" stopColor="#458796" />
            <stop offset="0%" stopColor="#456987" />
          </linearGradient>
        </defs>
      </Wave>
   
    </>
  );
};

export default Header;