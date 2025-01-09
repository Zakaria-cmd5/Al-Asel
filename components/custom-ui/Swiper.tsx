"use client";

import { PropsWithChildren } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";

const Swiper = ({ children }: PropsWithChildren) => {
  return (
    <SwiperComponent
      spaceBetween={50}
      slidesPerView={5}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      modules={[Pagination, Navigation]}
      className="w-[80%]"
    >
      <SwiperSlide className="flex">{children}</SwiperSlide>
    </SwiperComponent>
  );
};

export default Swiper;
