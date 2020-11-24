import React from 'react';
import '../styles/NavLink.css';
// import { Router, Link } from 'react-router-dom'; COME BACK TO WHEN MULTIPAGE


/* Redo with smooth scroll react router */
const NavLink = () => {
    return (
        <div className='navlink-container'>
            <ul className='navlink-list'>
                <li className='navlink-item'>
                    <a className='link' href='#About'>About</a>
                </li>
                <li className='navlink-item'>
                    <a className='link' href='#Work'>Work</a>
                </li>
                <li className='navlink-item'>
                    <a className='link' href='#Contact'>Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default NavLink;