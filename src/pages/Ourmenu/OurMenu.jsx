import React from 'react';
import { Helmet } from 'react-helmet';

import img from '../../assets/menu/banner3.jpg'
import PageBanner from '../shared/Component/PageBanner';
import Offersection from './Component/Offersection';
import Dessert from './Component/Dessert';
import Pizza from './Component/Pizza';
import Salad from './Component/Salad';
import Soup from './Component/Soup';
import useMenu from '../../hooks/useMenu';

const OurMenu = () => {
    const [menu, loading] = useMenu()
    const dessert= menu?.filter(item => item.category === 'dessert')
    const offered= menu?.filter(item => item.category === 'offered')
    const pizza= menu?.filter(item => item.category === 'pizza')
    const salad= menu?.filter(item => item.category === 'salad')
    const soup= menu?.filter(item => item.category === 'soup')
    
    return (
        <div >
            <Helmet>
                <title>Bistro boss | Our Menu</title>
            </Helmet>
            <PageBanner img={img} header={'Our Menu'} textDetails={'Would you like to try a dish?'}></PageBanner>
            <Offersection offered={offered}></Offersection>
         
            <Dessert dessert={dessert}></Dessert>
       
            <Pizza pizza={pizza} ></Pizza> 
            
            <Salad salad={salad} ></Salad>
      
            <Soup soup={soup}></Soup>

        </div>
    );
};

export default OurMenu;