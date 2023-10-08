import React from 'react';
import Marquee from "react-fast-marquee";
import img from '../Feedback../../../assets/gface1.png'
import face from '../Feedback../../../assets/mface1.png'


const Feedback = () => {
    return (
        <div className='mt-20'>
            <div>
                <h2 className='text-4xl text-center font-bold text-blue-600 mb-10'>Feedback From Our Users</h2>
            </div>
            <Marquee pauseOnHover='true'>
                <div className='shadow-lg p-6 mr-16 rounded-lg bg-gray-300 h-[420px]'>
                    <div className='flex justify-center'>
                        <img className='w-[150px] mb-4' src={img} alt="" />
                    </div>
                    <div className='text-center mt-3 mb-3'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div className='w-[400px] text-center font-bold'>
                        <p>"I attended a recent event which is arranged by them, and I was blown away by the impeccable organization. From ticketing to seating arrangements and halftime entertainment, everything ran smoothly. Kudos to the event management team for a fantastic job!"</p>
                    </div>
                </div>
                <div className='shadow-lg p-6 mr-16 rounded-lg bg-gray-300 h-[420px]'>
                    <div className='flex justify-center'>
                        <img className='w-[150px] mb-4' src={face} alt="" />
                    </div>
                    <div className='text-center mt-3 mb-3'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div className='w-[400px] text-center font-bold'>
                        <p>"The football club event was a memorable experience for my family. The event management ensured that it was family-friendly, with activities for kids, and excellent crowd control. We felt safe and had a blast!"</p>
                    </div>
                </div>
                <div className='shadow-lg p-6 mr-16 rounded-lg bg-gray-300 h-[420px]'>
                    <div className='flex justify-center'>
                        <img className='w-[150px] mb-4' src={img} alt="" />
                    </div>
                    <div className='text-center mt-3 mb-3'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div className='w-[400px] text-center font-bold'>
                        <p>"As a long-time fan, I've been to numerous football club events, and this one was by far the best. The event management team's attention to detail was evident in every aspect, from parking logistics to food options. It made for a stress-free and enjoyable day of football."</p>
                    </div>
                </div>
                <div className='shadow-lg p-6 mr-16 rounded-lg bg-gray-300 h-[420px]'>
                    <div className='flex justify-center'>
                        <img className='w-[150px] mb-4' src={face} alt="" />
                    </div>
                    <div className='text-center mt-3 mb-3'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div className='w-[400px] text-center font-bold'>
                        <p>"I volunteered to help with event management for the football club, and it was an eye-opening experience. The team's dedication and planning were impressive. They went above and beyond to create an engaging atmosphere for fans, ensuring everyone had a fantastic time."</p>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Feedback;