import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">Pickupbiz</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/Aboutus">Aboutus</NavLink>
            <NavLink to="/COntactus">Contactus</NavLink>
            <NavLink to="/Services">Services</NavLink>
            <NavLink to="/Login/Login">Login</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
