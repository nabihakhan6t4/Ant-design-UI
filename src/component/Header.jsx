import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/Logo.png";
import "./App.css"; // Ensure the correct path or create this file
import {  DropdownButton, DropdownItem } from "react-bootstrap"; // Using DropdownButton for better styling

const NavScrollExample = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
  };

  return (
    <div style={{ background: "#FFF1DA" }}>
      <Navbar expand="lg">
        <Container>
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
            <Form className="d-flex justify-content-center flex-column flex-lg-row align-items-center gap-3">
              <Nav.Link href="#action5" className="mr-4">
                Login
              </Nav.Link>
              <button className="signup-btn">Signup</button>
              <DropdownButton
                id="dropdown-language"
                title={selectedLanguage}
                onSelect={handleLanguageChange}
              >
                <DropdownItem eventKey="EN">English</DropdownItem>
                <DropdownItem eventKey="UR">Urdu</DropdownItem>
              </DropdownButton>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavScrollExample;