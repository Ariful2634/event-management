import React, { useEffect, useState } from 'react';
import Pro from './Pro';

const Product = () => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className='mt-20'>
            <h2 className='text-4xl font-bold text-blue-600 text-center'>Some Of Our Premium Products</h2>
            <div className='grid lg:grid-cols-2 gap-5'>
                {
                    product.map(pro=><Pro pro={pro}></Pro>)
                }
            </div>
        </div>
    );
};

export default Product;