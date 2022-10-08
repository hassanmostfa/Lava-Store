import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


function Slider() {
    return (
    <div className='slider'>
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        >
        <SwiperSlide> <img src="https://m.media-amazon.com/images/I/715uPxap-4L._SX3000_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/7102I1D+77L._SX3000_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/61S7anSm3yL._SX3000_.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://m.media-amazon.com/images/I/61j6L8NKWZL._SX3000_.jpg" alt="" /></SwiperSlide>
    </Swiper>
    </div>
    )
}

export default Slider