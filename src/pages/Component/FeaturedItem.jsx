import React from 'react';
import Sectiontitle from '../shared/Section title/Sectiontitle';
import featuredimg from "../../assets/home/featured.jpg"
import Button from '../shared/Component/Button';


const FeaturedItem = () => {
    return (
        <section className={`bg-fixed bg-no-repeat bg-cover mt-32`} style={{backgroundImage: `url(${featuredimg})`}}>
            <div className='bg-black bg-opacity-40 pt-12 pb-12'>

            <Sectiontitle subheading={"Check it out"} heading={"Featured Items"} textColor={"text-white"}></Sectiontitle>
            <div className='md:flex justify-center items-center gap-10 py-20 px-36'>
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className='text-white space-y-1'>
                    <p>Aug 20, 2020</p>
                    <p className='uppercase '> Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis pariatur optio tenetur eum laboriosam, maiores similique vero quisquam consectetur eaque dolorem odit est quis in voluptates rerum aliquid exercitationem fugit dolorum nostrum eius magnam deserunt! Dolor esse tempora molestias laboriosam nihil optio illum excepturi vero mollitia quasi, est sunt ullam.
                    </p>
                    <Button btnText={"Read More"}></Button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default FeaturedItem;