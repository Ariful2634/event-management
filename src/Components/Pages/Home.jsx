import React from 'react';
import Banner from '../Layout/Banner';
import Services from './Services';

import Product from '../Layout/Product';
import Feedback from '../Feedback/Feedback';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Product></Product>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;