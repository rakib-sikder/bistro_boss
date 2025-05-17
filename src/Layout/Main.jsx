import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/footer';
import Navbar from '../pages/shared/Navbar';

const Main = () => {
    const location = useLocation()
    const islogin =location.pathname.includes("login")
    return (
        <>
            {islogin || <Navbar />}
            <Outlet />
            {islogin || <Footer />}
        </>
    );
};

export default Main;