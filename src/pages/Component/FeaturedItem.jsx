import React from 'react';
import Sectiontitle from '../shared/Section title/Sectiontitle';
import featuredimg from "../../assets/home/featured.jpg"
import Button from '../shared/Component/Button';


const FeaturedItem = () => {
    return (
        <section className={`bg-fixed bg-no-repeat bg-cover mt-32`} style={{backgroundImage: `url(${featuredimg})`}}>
            <div className='bg-black/60'>

            <Sectiontitle subHeading={"Check it out"} heading={"Featured Items"} textColor={"text-white"}></Sectiontitle>
            <div className='md:flex justify-center items-center gap-12 py-16 px-6 md:px-24 max-w-5xl mx-auto'>
                <div className='rounded-2xl overflow-hidden shadow-2xl shrink-0'>
                    <img src={featuredimg} alt="" className='w-full md:w-80' />
                </div>
                <div className='text-white space-y-3 mt-6 md:mt-0'>
                    <p className='text-xs tracking-widest text-neutral-300'>Aug 20, 2020</p>
                    <p className='uppercase text-2xl font-semibold'>Where can i get some?</p>
                    <p className='text-neutral-200 text-sm leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis pariatur optio tenetur eum laboriosam, maiores similique vero quisquam consectetur eaque dolorem odit est quis in voluptates rerum aliquid exercitationem fugit dolorum nostrum eius magnam deserunt! Dolor esse tempora molestias laboriosam nihil optio illum excepturi vero mollitia quasi, est sunt ullam.
                    </p>
                    <Button btnText={"Read More"}></Button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default FeaturedItem;