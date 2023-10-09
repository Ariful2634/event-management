import React from 'react';
import 'aos/dist/aos.css';


const Event = ({event}) => {
    const {name,image,short_description}=event;
    return (
        <div data-aos="flip-right">
            
            <div className="card w-[370px] bg-base-100 shadow-xl">
                
                <figure><img className='h-[250px] w-full' src={image} alt="Shoes" /></figure>
                
                <div className="card-body">
                    <h2 className="card-title text-blue-600 font-bold">{name}</h2>
                    <p className='font-semibold mb-6'>{short_description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Event;