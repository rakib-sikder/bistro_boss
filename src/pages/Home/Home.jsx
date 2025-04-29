import React from 'react';

import FeaturedItem from '../Component/FeaturedItem';
import Testimonial from '../Component/Testimonial';
import Banner from '../Component/Banner';
import Category from '../Component/Category';
import PopularMenu from '../Component/PopularMenu';
import ResturentDetails from '../Component/ResturentDetails';
import ContactNumber from '../Component/ContactNumber';
import ShouldTry from '../Component/ShouldTry';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
               
                
            </Helmet>
            <Banner />
            {/* You can add more components or content here */}
            <Category />
            {/* <PopularMenu /> */}
            {/* Add more sections as needed */}
            <ResturentDetails />
            <PopularMenu />
            <ContactNumber />
            <ShouldTry />
            <FeaturedItem />

            {/* <Testimonial /> */}
            <Testimonial />
        </div>
    );
};

export default Home;