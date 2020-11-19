import React from 'react';
import '../styles/Navbar.css'
import { FaInstagram, FaFacebook } from 'react-icons/fa';
// import { Router, Link } from 'react-router-dom'; COME BACK TO WHEN MULTIPAGE

const Navbar = () => {
    return (
        <div className='navbar-container'>
                <div className='navbar-title'>
                    Pacific Coast Visuals
                </div>
            <div className='navbar-icons-container'>
                <a className='navbar-icon' href='https://www.instagram.com/designs.hv/' target='_blank'>
                    <FaInstagram size='32px' color='#eee'/>
                </a>
                <a className='navbar-icon' href='https://www.facebook.com/' target='_blank'>
                    <FaFacebook size='32px' color='#eee'/>
                </a>
            </div>
        </div>
    );
};

export default Navbar;