import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const { userId, id, title, body } = postDetails;
    const navigate = useNavigate();
    const handleAuthor = () => {
        navigate(`/friend/${userId}`)
    }

    return (
        <div className=' text-center w-7/12 mt-8 mx-auto bg-sky-900 text-white p-6 rounded-lg'>
            <p className='text-5xl mb-3 font-semibold'>Details About Post: {id}</p>
            <button onClick={handleAuthor} className='mb-5 text-3xl font-semibold'>Get Details of Author</button>
            <p className=' text-2xl font-medium'>{title}</p>
            <p className='text-normal mt-3'>Description: {body}</p>
        </div>
    );
};

export default PostDetails;