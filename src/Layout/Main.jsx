import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Navbar from '../pages/shared/Navbar';

const Main = () => {
    const location = useLocation()
    const hideChrome = location.pathname.includes("login") || location.pathname.includes("signup")
    return (
        <>
            {hideChrome || <Navbar />}
            <Outlet />
            {hideChrome || <Footer />}
        </>
    );
};

export default Main;