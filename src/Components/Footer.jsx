import React from 'react'
import './Footer.css'
import footerLogo from '../assets/logo_big.png'
import instagramLogo from '../assets/instagram_icon.png'
import pintLogo from '../assets/pintester_icon.png'
import whatsLogo from '../assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footerLogo}/>
            <p>BRAND</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className="footer-icon-container">
                <img src={instagramLogo} />
            </div>
            <div className="footer-icon-container">
                <img src={pintLogo} />
            </div>            <div className="footer-icon-container">
                <img src={whatsLogo} />
            </div>
        </div>
        <div className='footer-copyRight'>
            Copyright @ 2023 - All rights Reserved.
        </div>
    </div>
  )
}

export default Footer