import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className=' max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
        <div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Root;