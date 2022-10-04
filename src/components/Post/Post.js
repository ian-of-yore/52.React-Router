import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    console.log(post);
    const { userId, id, title, body } = post;
    const navigate = useNavigate();
    const navigateHandler = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='text-center my-4 p-4 bg-cyan-800 text-white w-7/12 mx-auto rounded-lg'>
            <p>UserID: {userId}</p>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <button onClick={navigateHandler} className='outline outline-blue-500 bg-white text-black rounded-full mt-4 px-4'>Show Details</button>
        </div>
    );
};

export default Post;