import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosCall } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";


const Footer = () => {


  return (
    <>
      <footer>
        <div className="center-footer-text footer-fz" data-aos='fade-up' data-aos-delay='400'>
          WE ARE A FINE  ARHITECH IN  COIMBATORE
        </div>
        <small className='small-color li-small' >
          DISCOVER MORE FROM OUR WEBSITE
        </small>

        <div className="container">
          <div className="row text-white fg">
            <div className="col-12 col-md-4">
              <div className="footer-contact-details">
                <ul >
                  <li><Link to='/about' className='footer-link'>About Us</Link></li>
                  <li><Link to='/services' className='footer-link'>Services</Link></li>
                  <li><Link to='/project' className='footer-link'>Projects</Link></li>
                  <li><Link to='/contact' className='footer-link'>Contact</Link></li>
                </ul>
              </div>

            </div>
            <div className="col-12 col-md-4">
              <div className="address">
                No.2,Ground Floor,
                Mahalakshmi Enclave ,
                Near Kumaran Mahal,
                Kovaipudur,Coimbatore - 641042 .
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="foot-last">
                <a href='tel:+919788220868'><span className='me-3 footicon'><IoIosCall/></span><span>97882 20868</span></a> <br />
                <a href='mailto:info.vmassociatescbe@gmail.com'><span className='me-3 footicon'><MdOutlineMail/></span><span>info.vmassociatescbe@gmail.com</span></a><br />
                <a href='https://www.instagram.com/vmassociatescbe?igsh=d3BjYTVkN2FvbWNr'><span className='me-3 footicon'><FaInstagram/></span><span>vmassociatescbe</span></a> <br />
              </div>
            </div>
          </div>

        </div>


        <div className="bottom-li small-color">

          <p>&copy;vmassociates 2024 - developed by Illusiview</p>
        </div>
      </footer>
    </>
  )
}

export default Footer