import React from 'react';
import './header.css'

const Header = ({setShow}) => {
    return (
        <div className='header'>
            <div className='title' onClick={()=> setShow(true)}>
                <h1>Resell Store</h1>
                </div>
        </div>
    )
};

export default Header