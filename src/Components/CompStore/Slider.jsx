import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Store.css";

// import required modules

import { Autoplay, Pagination, Navigation } from "swiper";
export default function Slider() {
  return (
    <div id="swiper_div">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="swp_img"
            src="https://cdn.shopify.com/s/files/1/0571/9906/7323/files/RE_Launch_Banner.jpg?v=1668108606"
            height="10%"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0571/9906/7323/files/Shop_Motorcycle_Accessories.jpg?v=1668077208"
            alt="img"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0571/9906/7323/files/Shop_Riding_Gears_aa79192b-9f55-46cd-a1ff-b41aa5924aa4.jpg?v=1668079495"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0571/9906/7323/files/Shop_Apparel.jpg?v=1668076992"
            alt="img"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
