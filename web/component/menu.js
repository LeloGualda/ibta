import  React  from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function Menu(){
    return <styleMenu><Navbar bg="light"  expand="lg">
    <Navbar.Brand href="home">AURÉLIO L. GUALDA</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Link to="/ibta/" className="nav-link">Home</Link>
        <Link to="/ibta/tcc" className="nav-link" >TCC</Link>
        <NavDropdown title="Disciplinas" id="basic-nav-dropdown">
          <NavDropdown.Item ><Link className="nav-link" to="/ibta/disciplinas/web-service">Web service</Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </styleMenu>
}
