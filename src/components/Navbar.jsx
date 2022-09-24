import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import React from "react";
import cake from "../assets/img/cake.png"
function Header() {
  const cakeImg = cake;
  return (
    <Navbar expand="lg" bg="danger" variant="dark">
      <Container>
        <img src={cakeImg} className="customImgNav"/>
        <Navbar.Brand> Mis Pasteles</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/"  className="text-white ms-3 text-decoration-none">
              Home
            </Link>
            <Link to="/contacto"  className="text-white ms-3 text-decoration-none">
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;