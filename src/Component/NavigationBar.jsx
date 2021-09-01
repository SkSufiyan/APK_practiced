import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
export const NavigationBar = () => {
  return (
    <div className="A">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">Pickupbiz</Navbar.Brand>

          <Nav className="me-auto">
            <div className="B">
              <NavLink to="/Home">Home</NavLink>
              <br />

              <NavLink to="/Aboutus">Aboutus</NavLink>
              <br />
              <NavLink to="/COntactus">Contactus</NavLink>
              <br />
              <NavLink to="/Services">Services</NavLink>
              <br />
              <NavLink to="/Login/Login">Login</NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
