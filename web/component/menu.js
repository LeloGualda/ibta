import  React  from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Menu(){
    return <Navbar bg="light"  expand="lg">
    <Navbar.Brand href="home">AURÉLIO L. GUALDA</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/ibta/">Home</Link>
        <Link to="/ibta/tcc">TCC</Link>
        <NavDropdown title="Disciplinas" id="basic-nav-dropdown">
          <NavDropdown.Item ><Link to="/ibta/disciplinas/web-service">Web service</Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}


