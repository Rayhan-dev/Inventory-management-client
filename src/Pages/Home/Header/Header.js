import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css"

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="inventory_name" href="#home">Book<span>Ipedia</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="navbar_item" href="#home">Home</Nav.Link>
              <Nav.Link className="navbar_item" href="#link">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
