import React from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/Logo.png";
import './NavScrollExample.css'; // Ensure the correct path or create this file
import 'antd/dist/reset.css'; // For Ant Design styling (if you still need it)
import { Dropdown } from 'react-bootstrap'; // Importing Dropdown for language selection

const NavScrollExample = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container > 
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">Destinations</Nav.Link>
            <Nav.Link href="#action2">Hotels</Nav.Link>
            <Nav.Link href="#action3">Flights</Nav.Link>
            <Nav.Link href="#action4">Bookings</Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center gap-3">
            <Nav.Link href="#action5" className="mr-4">Login</Nav.Link>
            <button className="signup-btn">Signup</button>

            <Dropdown className="language-dropdown">
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="no-border">
                EN
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Urdu</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavScrollExample;