import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';



const ServiceDetails = () => {

    const {id}=useParams()
    const intId = parseInt(id)
   

    const load = useLoaderData()
   

    const details = load.find(load=>load.id==id)
    

    return (
        <div className='flex justify-center mt-10'>
           <div className="card w-96   bg-base-100 shadow-xl">
                
                <figure><img className='h-[250px] w-full' src={details.image} alt="Shoes" /></figure>
                
                <div className="card-body">
                    <h2 className="card-title  text-blue-600 font-bold">{details.name}</h2>
                    <p className='font-semibold mb-6'>{details.short_description}</p>
                    <div className="card-actions justify-end items-center">
                        <p className='font-bold'>Price: ${details.price}</p>
                        <button className="btn btn-warning font-bold">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;