import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer';
import Navbar from '../pages/shared/Navbar';

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;