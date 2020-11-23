import React from 'react';
import '../styles/NavLink.css';
// import { Router, Link } from 'react-router-dom'; COME BACK TO WHEN MULTIPAGE

const NavLink = () => {
    return (
        <div className='navlink-container'>
            <ul className='navlink-list'>
                <li className='navlink-item'>
                    <a class='link' href='#'>About</a>
                </li>
                <li className='navlink-item'>
                    <a class='link' href='#'>Work</a>
                </li>
                <li className='navlink-item'>
                    <a class='link' href='#'>Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default NavLink;