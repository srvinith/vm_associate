import { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
// import { faHourglassEmpty } from '@fortawesome/free-solid-svg-icons';



function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [expanded, setExpanded] = useState(false);
  const[open,setOpen] =useState(false);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ijkesce",
        "template_ry8sfm8",
        form.current,
        "DU0saxAy8N6bOVz8q"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="position-absolute top-0 end-0 w-100 navbar-top ">
      <Navbar expand="lg" className="text-white" expanded={expanded}>
        <Container>
          <Navbar.Brand className="text-white fs-3" href="/"><img src="https://vmassociatescbe.com/vm%20associates/images/logo.png" alt="logo" className='img-fluid logo' /></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
            className="toggels text-white">
            {expanded ? <IoMdClose className='nav-icon' /> : <IoIosMenu className='nav-icon' />}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              {/* <Nav.Link className={isActive('/') ? "nav-links active" : "nav-links"}  href="/">Home</Nav.Link> */}
              <Nav.Link className={isActive('/about') ? "nav-links active" : "nav-links"} href="/about">About</Nav.Link>
              <Nav.Link className={isActive('/service') ? "nav-links active" : "nav-links"} href="/service">Services</Nav.Link>
              <Nav.Link className={isActive('/project') ? "nav-links active" : "nav-links"} href="/project">Project</Nav.Link>
            </Nav>
            <button type="button" className="contact-button mx-3 fw-2" onClick={()=>setOpen(!open)}>CONTACT</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ==========contact form=========== */}

    {open &&   <div className="contactform">
      <StyledContactForm>
      <form ref={form} onSubmit={sendEmail} className="form-box">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        <div className="close-btn"onClick={()=>setOpen(false)}><IoCloseSharp/></div>
      </form>
    </StyledContactForm>
      </div>}
    </div>
  );
}

export default Header;

const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;