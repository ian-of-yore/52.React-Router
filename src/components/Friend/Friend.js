import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    // console.log(friend)
    const { id, name, username, email } = friend;
    return (
        <div className='text-center bg-slate-700 my-10 py-4 w-7/12 mx-auto text-white rounded-lg'>
            <p className='text-2xl font-semibold'>Name: {name}</p>
            <p >Email: {email}</p>
            <p className='text-xl'>Username: <Link to={`/friend/${id}`}>{username}</Link></p>
        </div>
    );
};

export default Friend;