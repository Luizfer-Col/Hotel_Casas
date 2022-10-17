import React from "react";
import Style from "./Gallery.module.css";
// Importando Swiper de React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Controller,
} from "swiper";
// Importando Swiper styles
import "swiper/css";
import Slide from "./Slide";
import "swiper/swiper-bundle.css";
import Img1 from "../../../assets/img/Home/Img1.jpg";
import Img2 from "../../../assets/img/Home/Img2.jpg";
import Img3 from "../../../assets/img/Home/Img3.jpg";


const Gallery = () => {
  const slides = [];
  const images = [Img1, Img2, Img3];
  for (let i = 0; i < images.length; i ++ ) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <div className={Style.slideContainer}>
      
        <img
          src={images[i]}
          width={600}
          height={400}
          style={{ listStyle: "none", objectFit: "cover" }}
          alt={`Slide ${i}`}
          />
          </div>
      </SwiperSlide>
    );
  }
  return (
    <>
      <Swiper
        id="main"
        modules={[Autoplay, Navigation, Pagination, Controller]}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 1000 }}
      >
        {slides}
      </Swiper>
    </>
  );
};

export default Gallery;
