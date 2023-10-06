import React from 'react';
import training from '../Layout../../../assets/training.jpg'

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/dBbkPRB/omar-ram-h9-Pv-Mvsx-Ik-unsplash.jpg')] h-screen bg-cover bg-no-repeat bg-black bg-opacity-100 relative">
            <div className='text-white font-bold text-xl text-center md:text-3xl md:pt-20 md:text-center lg:text-5xl lg:py-56 lg:text-end pt-20 lg:mr-10'>
            <h2 >KEEP YOUR BODY FIT WITH <br />  REGULAR  FOOTBALL TRAINING</h2>
            </div>
            <div className='lg:top-[350px] w-[150px]  md:left-[290px] top-[150px] md:top-[170px] left-[130px] lg:left-[900px] absolute'>
                <button className='btn font-bold'>Apply For Training</button>
            </div>
        </div>
    );
};

export default Banner;