import React from 'react';

import FeaturedItem from '../Component/FeaturedItem';
import Testimonial from '../Component/Testimonial';
import Banner from '../Component/Banner';
import Category from '../Component/Category';
import PopularMenu from '../Component/PopularMenu';


const Home = () => {
    return (
        <div>
            <Banner />
            {/* You can add more components or content here */}
            <Category />
            {/* <PopularMenu /> */}
            <PopularMenu />
            {/* Add more sections as needed */}
            <FeaturedItem />

            {/* <Testimonial /> */}
            <Testimonial />
        </div>
    );
};

export default Home;