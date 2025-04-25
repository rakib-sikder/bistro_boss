import React from 'react';

import FeaturedItem from '../Component/FeaturedItem';
import Testimonial from '../Component/Testimonial';
import Banner from '../Component/Banner';
import Category from '../Component/Category';
import PopularMenu from '../Component/PopularMenu';
import ResturentDetails from '../Component/ResturentDetails';
import ContactNumber from '../Component/ContactNumber';


const Home = () => {
    return (
        <div>
            <Banner />
            {/* You can add more components or content here */}
            <Category />
            {/* <PopularMenu /> */}
            {/* Add more sections as needed */}
            <ResturentDetails />
            <PopularMenu />
            <ContactNumber />
            <FeaturedItem />

            {/* <Testimonial /> */}
            <Testimonial />
        </div>
    );
};

export default Home;