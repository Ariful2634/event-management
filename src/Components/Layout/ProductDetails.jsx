import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import 'aos/dist/aos.css';

const ProductDetails = () => {
    const {id}=useParams()
    const intId = parseInt(id)
    const proDetails = useLoaderData()
    console.log(proDetails)
    console.log(id)

    const details = proDetails.find(pro=>pro.id===intId)

    return (
        <div className='flex justify-center mt-10' data-aos="fade-up-right">
           <div className="card w-96   bg-base-100 shadow-xl">
                
                <figure><img className='h-[350px] w-full' src={details.image} alt="Shoes" /></figure>
                
                <div className="card-body">
                    <h2 className="card-title  text-blue-600 font-bold">{details.name}</h2>
                    <p className='font-semibold mb-6'>{details.short_description}</p>
                    <div className="card-actions justify-end items-center">
                        <p className='font-bold'>Price: ${details.price}</p>
                        <button className="btn btn-success font-bold">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;