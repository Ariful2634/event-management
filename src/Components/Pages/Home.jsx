import React from 'react';
import Banner from '../Layout/Banner';
import Services from './Services';


import Feedback from '../Feedback/Feedback';
import Events from '../Events/Events';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
           <Events></Events>
            <Feedback></Feedback>
            
        </div>
    );
};

export default Home;