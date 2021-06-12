import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./Tastimonials.css"



// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Tastimonals = () => {
    return (
        <div class="tastimonials ">
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                <SwiperSlide  ><div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></SwiperSlide><SwiperSlide><div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Tastimonals;