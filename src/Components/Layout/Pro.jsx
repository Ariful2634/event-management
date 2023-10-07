import React from 'react';

const Pro = ({pro}) => {
    const {name,image}=pro;
    return (
        <div>
            <div className='shadow-lg p-5 mr-20 rounded-lg mt-10'>
                <div className='flex justify-center'>
                <img className='w-[250px]' src={image} alt="" />
                </div>
                <p className='text-center text-2xl mt-4 text-green-800 font-bold'>{name}</p>
                <div className='text-center mt-5'>
                    <button className='btn btn-success font-bold'>Show Details </button>
                </div>
                </div>
                
        </div>
    );
};

export default Pro;