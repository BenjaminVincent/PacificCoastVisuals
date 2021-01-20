import React from 'react';
import '../styles/Button.css';

const Button = ({ text }) => {
    return (
        <div className='button-container'>
            {text}
        </div>
    );
};

export default Button;
