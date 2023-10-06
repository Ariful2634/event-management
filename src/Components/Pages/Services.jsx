import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {

    const [service,setService]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    return (
        <div>
            <div className='mt-16 text-4xl font-bold text-blue-800 text-center'>
                <h1>Our Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    service.map(serve=><Service serve={serve}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;