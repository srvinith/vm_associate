import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
      <div className="center-footer-text">
      WE ARE A FINE <br /> ARHITECH IN <br /> COIMBATORE
      </div>
      <small className='small-color li-small'>
      DISCOVER MORE FROM OUR WEBSITE
      </small>

      <ul >
        <li><Link to='/about' className='footer-link'>About Us</Link></li>
        <li><Link to='/services' className='footer-link'>Services</Link></li>
        <li><Link to='/project' className='footer-link'>Projects</Link></li>
        <li><Link to='/contact' className='footer-link'>Contact</Link></li>
      </ul>

      <div className="bottom-li small-color">
        
        <p>@vmassociates 2023 - developed by Illusiview</p>
      </div>
    </footer>
    </>
  )
}

export default Footer