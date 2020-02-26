import  React  from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'


export default function Menu(){
    return <Navbar bg="light"  expand="lg">
    <Navbar.Brand href="home">AURÉLIO L. GUALDA</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/tcc">TCC</Nav.Link>
        <NavDropdown title="Disciplinas" id="basic-nav-dropdown">
          <NavDropdown.Item href="/disciplinas/web-service">Web service</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}


