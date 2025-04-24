import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {reviews.map((review) => (
        <SwiperSlide >
          <div className="flex flex-col items-center justify-center h-full px-10 py-20 bg-gray-100 rounded-lg">
          <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
          <FaQuoteLeft className="text-7xl" />
           <p className="text-lg  text-gray-600 px-4">{review.details}</p>
            <h3 className="mt-4 text-xl font-semibold text-yellow-600">
              {review.name}
            </h3>
            
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;
