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
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {reviews.map((review) => (
        <SwiperSlide key={review._id}>
          <div className="flex flex-col items-center justify-center h-full px-10 py-20 bg-neutral-50 rounded-2xl text-center">
          <Rating style={{ maxWidth: 140 }} value={review.rating} readOnly />
          <FaQuoteLeft className="my-4 text-4xl text-primary/30" />
           <p className="text-base text-neutral-600 px-4 max-w-xl leading-relaxed">{review.details}</p>
            <h3 className="mt-5 text-lg font-semibold text-primary">
              {review.name}
            </h3>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;
