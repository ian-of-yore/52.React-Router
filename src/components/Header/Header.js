import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center text-3xl font-semibold bg-emerald-900 text-white py-6 '>
            <Link className='mr-6' to='/home'>Home</Link>
            <Link className='mr-6' to='/friends'>Friends</Link>
            <Link className='mr-6' to='/posts'>Posts</Link>
            <Link className='mr-6' to='/products'>Products</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;