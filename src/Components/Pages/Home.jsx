import React from 'react';
import Banner from '../Layout/Banner';
import Services from './Services';

import Product from '../Layout/Product';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Product></Product>
        </div>
    );
};

export default Home;