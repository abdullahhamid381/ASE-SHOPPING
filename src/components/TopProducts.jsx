import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../Scss/TopProduct.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { TopProducts } from "../../Data";
import topproduct from '../assets/21.png'

export default function App() {
    return (

        <div className="TopProuct-parent">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
              

                navigation={true}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}


                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 8,
                        spaceBetween: 10,
                    },
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >

                {
                    TopProducts.map((map) => {
                        return (
                            <SwiperSlide>
                            <div>
                              
                                    <img src={topproduct} alt="" />
                                  
                                
                            </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>


    );
}
