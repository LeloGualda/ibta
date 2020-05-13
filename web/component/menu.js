import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Menu() {
  return (
    <styleMenu>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="home">AURÉLIO LUIZ GUALDA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/1" className="nav-link">
              atividade 1
            </Link>
            <Link to="/2" className="nav-link">
              atividade 2
            </Link>
            <Link to="/3" className="nav-link">
              atividade 3
            </Link>
            <Link to="/4" className="nav-link">
              atividade 4
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </styleMenu>
  );
}
