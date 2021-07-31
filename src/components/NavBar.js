/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="w-100 nav-box-shadow nav-white">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-semi-bold fs-6">
            <Nav.Link href="#home" className="ms-4">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="ms-4">
              About
            </Nav.Link>
            <Nav.Link href="#skill" className="ms-4">
              Skills
            </Nav.Link>
            <Nav.Link href="#project" className="ms-4">
              Projects
            </Nav.Link>
            <Nav.Link href="#certification" className="ms-4">
              Certifications
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
