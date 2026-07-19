import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import Sectiontitle from '../shared/Section title/Sectiontitle';
import { Reveal } from "@/components/motion/Reveal";


const Category = () => {
    return (
        <Reveal>
            <Sectiontitle subHeading={"From 11.00am to 10.00pm"} heading={"Order Online"}></Sectiontitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide className="rounded-2xl overflow-hidden">
          <img src={img1} alt="" className="rounded-2xl" />
          <h3 className='text-2xl font-semibold tracking-wide uppercase text-center -mt-16 pb-6 text-white drop-shadow'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl overflow-hidden">
          <img src={img2} alt="" className="rounded-2xl" />
          <h3 className='text-2xl font-semibold tracking-wide uppercase text-center -mt-16 pb-6 text-white drop-shadow'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl overflow-hidden">
          <img src={img3} alt="" className="rounded-2xl" />
          <h3 className='text-2xl font-semibold tracking-wide uppercase text-center -mt-16 pb-6 text-white drop-shadow'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl overflow-hidden">
          <img src={img4} alt="" className="rounded-2xl" />
          <h3 className='text-2xl font-semibold tracking-wide uppercase text-center -mt-16 pb-6 text-white drop-shadow'>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide className="rounded-2xl overflow-hidden">
          <img src={img5} alt="" className="rounded-2xl" />
          <h3 className='text-2xl font-semibold tracking-wide uppercase text-center -mt-16 pb-6 text-white drop-shadow'>Salads</h3>
        </SwiperSlide>
      </Swiper>
        </Reveal>
    );
};

export default Category;