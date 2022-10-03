import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails = useLoaderData();

    const { name, address, company, website, phone } = friendDetails;
    const { city, street, suite } = address;
    return (
        <div className='bg-teal-900 text-white py-10 my-10 w-7/12 mx-auto rounded-2xl'>
            <p className='text-center text-5xl font-semibold mb-8'>Details of {name}</p>
            <div className='text-center text-2xl font-medium'>
                <p>Address: {city} {street} {suite}</p>
                <p>Works At: {company.name}</p>
                <p>Website: {website}</p>
                <p>Contact: {phone}</p>
            </div>
        </div>
    );
};

export default FriendDetails;