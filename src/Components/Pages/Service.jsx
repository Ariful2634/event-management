import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ serve }) => {
    const { id,name, image, price, short_description } = serve;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                
                <figure><img className='h-[250px] w-full' src={image} alt="Shoes" /></figure>
                
                <div className="card-body">
                    <h2 className="card-title text-blue-600 font-bold">{name}</h2>
                    <p className='font-semibold mb-6'>{short_description}</p>
                    <div className="card-actions justify-end items-center">
                        <p className='font-bold'>Price: ${price}</p>
                     <Link to={`/serve/${id}`}>   <button className="btn btn-warning font-bold">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;