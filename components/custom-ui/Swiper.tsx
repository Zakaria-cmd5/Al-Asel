"use client";

import React, { PropsWithChildren } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";

const Swiper = ({ children }: PropsWithChildren) => {
  return (
    <SwiperComponent
      spaceBetween={20} // Adjusted for better spacing between slides
      slidesPerView={5} // Number of slides to show
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      modules={[Pagination, Navigation]}
      className="w-[80%]"
    >
      {React.Children.toArray(children).map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </SwiperComponent>
  );
};

export default Swiper;
