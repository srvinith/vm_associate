import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
   <div className="position-absolute top-0 end-0 w-100 ">
     <Navbar expand="lg" className="text-white">
      <Container>
        <Navbar.Brand className="text-white fs-3" href="#home">VM ASSOCIATES</Navbar.Brand>
        <Navbar.Toggle className="text-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="text-white" href="#">HOME</Nav.Link>
            <Nav.Link className="text-white" href="#">ABOUT</Nav.Link>
            <Nav.Link className="text-white" href="#">SERVICES</Nav.Link>
            <Nav.Link className="text-white" href="#">PROJECTS</Nav.Link>
          </Nav>
            <button type = "button" className = "contact-button mx-3 fw-2">CONTACT</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
  );
}

export default Header;