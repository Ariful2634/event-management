import React, { useEffect, useState } from 'react';
import Event from './Event';


const Events = () => {
    const [event,setEvent]=useState([])
    useEffect(()=>{
        fetch('event.json')
        .then(res=>res.json())
        .then(data=>setEvent(data))
    },[])
    return (
        <div>
            <h2 className='text-3xl font-bold text-center text-green-500 mt-20 mb-10'>Upcoming Events that We Organized</h2>
            <div className='lg:ml-24 ml-5 md:ml-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                {
                    event.map(event=><Event event={event}></Event>)
                }
            </div>
        </div>
        </div>
    );
};

export default Events;