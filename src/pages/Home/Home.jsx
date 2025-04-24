import React from 'react';
import Banner from './Banner';
import Category from './category';
import PopularMenu from './PopularMenu';
import FeaturedItem from '../shared/Component/FeaturedItem';

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
        </div>
    );
};

export default Home;