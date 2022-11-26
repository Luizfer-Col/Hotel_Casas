// import React, { useRef } from "react";
// import Style from "./Gallery.module.css";
// // Importando Swiper de React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   Autoplay,
//   Controller,
// } from "swiper";
// // Importando Swiper styles
// // import "swiper/css";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import Slide from "./Slide";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import Img1 from "../../../assets/img/Home/Img1.jpg";
// import Img2 from "../../../assets/img/Home/Img2.jpg";
// import Img3 from "../../../assets/img/Home/Img3.jpg";

// const Gallery = () => {
//   const slides = [];
//   // const swiperNavPrevRef = useRef(null);
//   // const swiperNavNextRef = useRef(null);
//   const images = [Img1, Img2, Img3];
//   for (let i = 0; i < images.length; i++) {
//     slides.push(
//       <SwiperSlide key={`slide-${i}`} tag="li">
//         <div
//           className={Style.slideContainer}
//           style={{
//             backgroundColor: `yellow`,
//             // backgroundImage: `url(${images[i]})`,
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//           }}
//         >
//           {/* <div
//            style={{ height: 659 }}
//           > */}
//           <img
//             src={`${images[i]}`}
//             alt="Project"
//             className="slide-image"
//           />
//           <div>
//             <h3>Habitaciones cómodas y confortables</h3>
//           </div>
//         </div>
//         {/* </div> */}
//       </SwiperSlide>
//     );
//   }
//   return (
//     <div className={Style.container}>
//       <Swiper
//       className="mySwiper"
//         id="main"
//         modules={[Autoplay, Navigation, Pagination, Controller]}
//         tag="section"
//         wrapperTag="ul"
//         navigation
//         // navigation={{
//         //   prevEl: swiperNavPrevRef.current,
//         //   nextEl: swiperNavNextRef.current,
//         // }}
//         pagination
//         spaceBetween={0}
//         slidesPerView={1}
//         onSlideChange={() => console.log("slide change")}
//         onSwiper={(swiper) => console.log(swiper)}
//       // autoplay={{ delay: 6000 }}
//       >
//         {slides}
//       </Swiper>
//     </div>
//   );
// };

// export default Gallery;

import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./swiper.css";
import Img1 from "../../../assets/img/Home/Img1.jpg";
import Img2 from "../../../assets/img/Home/Img2.jpg";
import Img3 from "../../../assets/img/Home/Img3.jpg";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const Gallery = () => {

  const images = [Img1, Img2, Img3];


  return (
    <div>
      <Swiper
        effect={"coverflow"}
        loop={true}
        // grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // autoplay={{
        //   delay: 5000
        // }}
        pagination={{ clickable: true }}
        navigation={true}
        className="swiper"
      >
        {images.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Gallery;
