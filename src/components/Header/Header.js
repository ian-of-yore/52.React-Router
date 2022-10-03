import React from 'react';
// import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center text-3xl font-semibold bg-emerald-900 text-white py-6 '>
            <Link className='mr-6' to='/home'>Home</Link>
            <Link className='mr-6' to='/about'>About</Link>
            <Link to='/products'>Products</Link>
        </div>
    );
};

export default Header;