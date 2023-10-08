import React from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';


const Banner = () => {
    return (
        <div  className="bg-[url('https://i.ibb.co/dBbkPRB/omar-ram-h9-Pv-Mvsx-Ik-unsplash.jpg')] h-screen bg-cover bg-no-repeat opacity-100 relative mt-4" data-aos="fade-right" >
             <div class="absolute inset-0 bg-black opacity-50"></div>
            <div className='text-white  absolute left-16 top-2 italic md:text-2xl md:left-40 lg:top-4 lg:left-[230px] lg:text-4xl font-bold'>
                <h2>Welcome To Sports Event Management</h2>
            </div>
            <div className='text-white font-bold text-xl text-center md:text-xl md:pt-20 md:text-center lg:text-5xl lg:py-56 lg:text-end pt-16 lg:mr-10'>
            <h2 >KEEP YOUR BODY FIT WITH <br />  REGULAR  FOOTBALL TRAINING</h2>
            </div>
            <div className='text-white text-center text-base md:text-2xl absolute left-10 md:left-28 lg:top-[350px] lg:left-[600px] font-bold lg:text-xl'>
                <h2>Want to took coaching from our best coach? <br /> Click on apply now button!</h2>
            </div>
            <div className='lg:top-[420px] w-[150px]  md:left-[320px] top-[180px] md:top-[220px] left-[150px] lg:left-[750px] absolute'>
                <Link to='/training'><button className='btn font-bold'>Apply Now</button></Link>
            </div>
        </div>
    );
};

export default Banner;