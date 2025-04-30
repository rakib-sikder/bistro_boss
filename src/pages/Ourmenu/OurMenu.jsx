import React from 'react';
import { Helmet } from 'react-helmet';

import img from '../../assets/menu/banner3.jpg'
import PageBanner from '../shared/Component/PageBanner';
import Offersection from './Component/Offersection';
import ResturentDetails from '../Component/ResturentDetails';
import PizzaDetails from './Component/PizzaDetails';
import DessertDetails from './Component/DessertDetails';
import DessertMenu from './Component/DessertMenu';
import PizzaMenu from './Component/PizzaMenu';
import SaladDetails from './Component/SaladDetails';
import SaladMenu from './Component/SaladMenu';
import SoupDetails from './Component/SoupDetails';
import SoupMenu from './Component/SoupMenu';

const OurMenu = () => {
    
    return (
        <div >
            <Helmet>
                <title>Bistro boss | Our Menu</title>
            </Helmet>
            <PageBanner img={img} header={'Our Menu'} textDetails={'Would you like to try a dish?'}></PageBanner>
            <Offersection></Offersection>
            <DessertDetails></DessertDetails>
            <DessertMenu></DessertMenu>
            <PizzaDetails></PizzaDetails>  
            <PizzaMenu></PizzaMenu> 
            <SaladDetails></SaladDetails>
            <SaladMenu></SaladMenu>
            <SoupDetails></SoupDetails>
            <SoupMenu ></SoupMenu>

        </div>
    );
};

export default OurMenu;