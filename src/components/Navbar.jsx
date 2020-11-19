import React from 'react';
import '../styles/Navbar.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { Router, Link } from 'react-router-dom'; COME BACK TO WHEN MULTIPAGE

const Navbar = () => {
    return (
        <div className='navbar-container'>
                <div className='navbar-title'>
                    Pacific Coast Visuals
                </div>
            <div className='navbar-icons-container'>
                <div className='navbar-icon'>[put socials here]</div>
            </div>
        </div>
    );
};

export default Navbar;