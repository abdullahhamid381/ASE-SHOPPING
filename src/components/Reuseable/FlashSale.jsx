import React, { useRef, useState } from "react";
import Clock from './Countdown/Clock'
import {MdExpandLess} from 'react-icons/md'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import addfirst from '../../assets/25.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import flash from '../../assets/24.jpg'
import {IoIosFlash} from 'react-icons/io'
import './FlashSale.scss'
import { FlashSlae } from "../../../Data";
const FlashSale = () => {
    return (
        <div className='flash-sale-parent'>
          <div className="sub-flash-grid">
          <div className='timer-parent'>
                <div style={{display:'flex',alignItems:'center'}}>
                    <span><IoIosFlash/></span>
                    <span style={{fontSize:'30px'}}>Flash Sales</span>
                </div>
                <div>
                    <Clock />
                </div>
                <div className="see-all">
                   <button>VIEW ALL</button>
                </div>
            </div>

            <div className='cards-flashsale-parent'>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
              

                navigation={true}

                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}


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
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
  {
                FlashSlae.map((map)=>{
                    return(
                      <SwiperSlide>
                          <div className="single-product">
                        <img src={flash} alt="" />
                        <h5>
                            Maybelline Fit Me Matte And Poreless Foundation 30ml - 356 Warm Coconut
                        </h5>
                        <span>Incl of offer</span>
                        <br />
                        <span className="price">PKR 12,75</span>
                    </div>
                      </SwiperSlide>
                    )
                })
               }
                
            </Swiper>
             
            </div>
          </div>
            <div style={{marginTop:'30px'}}>
                <img src={addfirst} alt=""  width={'100%'}/>
            </div>
        </div>
    )
}

export default FlashSale