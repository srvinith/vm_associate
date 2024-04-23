import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import logo from '../Assets/images/logo.png'



function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="position-absolute top-0 end-0 w-100 navbar-top ">
      <Navbar expand="lg" className="text-white" expanded={expanded}>
        <Container>
          <Navbar.Brand className="text-white fs-3" href="/"><img src={logo} alt="logo" className='img-fluid logo' /></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
            className="toggels text-white">
            {expanded ? <IoMdClose className='nav-icon'/>:<IoIosMenu className='nav-icon'/>}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              {/* <Nav.Link className={isActive('/') ? "nav-links active" : "nav-links"}  href="/">Home</Nav.Link> */}
              <Nav.Link className={isActive('/about') ? "nav-links active" : "nav-links"} href="/about">About</Nav.Link>
              <Nav.Link className={isActive('/service') ? "nav-links active" : "nav-links"} href="/service">Services</Nav.Link>
              <Nav.Link className={isActive('/project') ? "nav-links active" : "nav-links"} href="/project">Project</Nav.Link>
            </Nav>
            <button type="button" className="contact-button mx-3 fw-2">CONTACT</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;