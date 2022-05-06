import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import "./Header.css"
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={'/'} className="inventory_name"><span>Book</span>Ipedia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="navbar_item" as={Link} to={'/'}>Home</Nav.Link>
              {
                user && <>
                  <Nav.Link className="navbar_item" as={Link} to={'/inventory'}>Manage Item</Nav.Link>
                  <Nav.Link className="navbar_item" as={Link} to={'/addItem'}>Add Item</Nav.Link>
                  <Nav.Link className="navbar_item" as={Link} to={'/'}>My Items</Nav.Link>
                </>
              }
              {
                user ?
                  <Nav.Link onClick={handleSignOut} className="navbar_item" >Sign Out</Nav.Link>
                  :
                  <Nav.Link as={Link} to={'/login'} className="navbar_item" >Login</Nav.Link>

              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
