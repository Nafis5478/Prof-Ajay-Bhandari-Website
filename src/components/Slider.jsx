import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import slider5 from "../assets/slider5.jpg";
const ImageSlider = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        <img
          src={slider3}
          alt="slider3"
          className="mx-auto h-48 w-full md:h-[552px] md:w-[80%] rounded-xl shadow-lg shadow-gray-700"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider4}
          alt="slider4"
          className="mx-auto h-48 md:h-[552px] md:w-[80%] rounded-xl shadow-lg shadow-gray-700"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider5}
          alt="slider5"
          className="mx-auto h-48 md:h-[552px] md:w-[80%] rounded-xl shadow-lg shadow-gray-700"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider1}
          alt="slider1"
          className="mx-auto h-48 w-[250px] md:h-[552px] md:w-[80%] rounded-xl shadow-lg shadow-gray-700"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider2}
          alt="slider2"
          className="mx-auto h-48 w-[250px] md:h-[552px] md:w-[80%] rounded-xl shadow-lg shadow-gray-700"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
