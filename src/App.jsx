import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from './assets/images/img_1.png';
import slide_image_2 from './assets/images/img_2.png';
import slide_image_3 from './assets/images/img_3.png';
import slide_image_4 from './assets/images/img_4.png';
import slide_image_5 from './assets/images/img_5.png';
import slide_image_6 from './assets/images/img_6.png';
import slide_image_7 from './assets/images/img_7.png';

function App() {
  return (
    <div className="container">
      <h1 className="heading">EVENTS</h1>
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          // prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="slide-container">
            <img src={slide_image_1} alt="slide_image" />
            <button className="book-now-btn">Book Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src={slide_image_2} alt="slide_image" />
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src={slide_image_3} alt="slide_image" />
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src={slide_image_4} alt="slide_image" />
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src={slide_image_5} alt="slide_image" />
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src={slide_image_6} alt="slide_image" />
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src={slide_image_7} alt="slide_image" />
           
          </div>
        </SwiperSlide>

        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        {/* <div className="swiper-button-prev"></div> */}
      </Swiper>
    </div>
  );
}

export default App;