import React from 'react';
import Banner from '../Layout/Banner';
import Services from './Services';

import Product from '../Layout/Product';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Product></Product>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;