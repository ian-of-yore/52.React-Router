import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center text-3xl font-semibold bg-emerald-900 text-white py-6 '>
            <NavLink className={({ isActive }) =>
                isActive ? 'text-slate-300 mr-6' : 'mr-6'
            } to='/home'>Home</NavLink>

            <NavLink className={({ isActive }) =>
                isActive ? 'text-slate-300 mr-6' : 'mr-6'
            } to='/friends'>Friends</NavLink>

            <NavLink className={({ isActive }) =>
                isActive ? 'text-slate-300 mr-6' : 'mr-6'
            } to='/posts'>Posts</NavLink>

            <NavLink className={({ isActive }) =>
                isActive ? 'text-slate-300 mr-6' : 'mr-6'
            } to='/products'>Products</NavLink>

            <NavLink to='/about' className={({ isActive }) =>
                isActive ? 'text-slate-300 mr-6' : 'mr-6'
            }>About</NavLink>
        </div>
    );
};

export default Header;