import React from 'react';
import tr from '../Pages../../../assets/Arteta.jpeg'
import t from '../Pages../../../assets/t.jpg'
import 'aos/dist/aos.css';


const Training = () => {
    return (
        <div  data-aos="fade-down-left">
            <div className='flex lg:flex-row flex-col gap-4  justify-around mt-8'>
                <div className='md:flex md:justify-center'>
                    <img className='w-[550px] rounded h-[300px]' src={tr} alt="" />
                </div>
                <div className='md:flex md:justify-center'>
                    <img className='w-[550px] rounded h-[300px]' src={t} alt="" />
                </div>
                
            </div>
           <div className='space-y-5 lg:mt-20  shadow-xl p-6 '>
           <div className='mt-10'>
           <h2 className='font-bold text-2xl text-center mb-6'>Why choose us?</h2>
                    <p className='font-medium'>We are dedicated to helping aspiring football players reach their full potential. Our state-of-the-art facilities, expert coaching staff, and comprehensive training programs make us the ultimate destination for players of all ages and skill levels. Whether you're a beginner looking to learn the fundamentals or a seasoned athlete aiming to refine your skills, our football training center is the place to be.</p>
                </div>
                <div>
                    
                    <p><span className='font-bold'>1. Expert Coaching:</span> Our coaching staff comprises experienced professionals who have played at the highest levels of the game. They bring a wealth of knowledge and passion to every training session, ensuring that you receive top-tier instruction.</p>
                    <p><span className='font-bold'>2. Comprehensive Curriculum:</span> Our training programs cover every aspect of the game, from basic techniques to advanced strategies. Whether you want to improve your dribbling, passing, shooting, or defensive skills, we've got you covered.</p>
                    <p><span className='font-bold'>3. State-of-the-Art Facilities:</span> Train in a world-class environment equipped with the latest training equipment, cutting-edge technology, and meticulously maintained pitches.</p>
                    <p> <span className='font-bold'>4. Individualized Training:</span> We understand that every player is unique. That's why we tailor our coaching to meet your specific needs and goals, helping you develop at your own pace.</p>
                </div>
                <div className='font-medium'>
                    <p>Don't miss this opportunity to elevate your football skills and become the player you've always wanted to be. Contact us today to learn more about our programs and how you can get started on your football journey with us.</p>
                </div>
                <div className='text-center'>
                <button className='btn btn-info font-bold'>Apply Now</button>
                </div>
           </div>
        </div>
    );
};

export default Training;