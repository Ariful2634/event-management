import React from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';

const Pro = ({pro}) => {
    const {id,name,image}=pro;
    return (
        <div data-aos="flip-right">
           
            <div className='shadow-lg p-5 lg:mr-20 mr-0 md:mr-0 rounded-lg mt-10 '>
                <div className='flex justify-center'>
                <img className='w-[250px]' src={image} alt="" />
                </div>
                <p className='text-center text-2xl mt-4 text-green-800 font-bold'>{name}</p>
                <div className='text-center mt-5'>
                    <Link to={`/details/${id}`}><button className='btn btn-success font-bold'>Show Details </button></Link>
                </div>
                </div>
                
        </div>
    );
};

export default Pro;