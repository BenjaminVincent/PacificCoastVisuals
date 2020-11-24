import React from 'react';
import '../styles/Menu.css'
// import { Router, Link } from 'react-router-dom'; COME BACK TO WHEN MULTIPAGE
import { FaBars } from 'react-icons/fa';

const Menu = () => {
    return (
        <div className='menu-container'>
            <FaBars size='32px' color='#eee' />
        </div>
    );
};

export default Menu;