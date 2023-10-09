import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='grid justify-center mt-16 lg:mt-44 space-y-3 text-red-500 font-bold'>
            <h1 className='text-center text-5xl'>Oops!!!</h1>
            <h2 className='lg:text-5xl md:text-4xl text-2xl'>404 Page not found</h2>
            <div className='text-center'>
                <Link to='/'><button className='btn btn-error text-white font-bold mt-2'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default Error;