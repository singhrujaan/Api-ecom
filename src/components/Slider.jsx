import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector } from 'react-redux';
import { useTranslation, initReactI18next, Trans } from "react-i18next";
const Slider = () => {
    const { t } = useTranslation();
    const mySlides = useSelector((state)=>state.Fav.favItems)
  return (
      <div className=' w-1/2 m-auto mt-32 '>
          <span className='text-3xl'>{t("YourFavouriteItems")}</span>
          <Swiper
          className='my-32'
    modules={[Navigation, Pagination]}
    spaceBetween={200}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: false }}
    >
        {mySlides.map((item)=>{
            return (
                <SwiperSlide>
                    <div className=''>
                    <img src={item.image}/>
                    <p className='text-2xl mt-2'>{item.title}</p>
                    </div>
                </SwiperSlide>

            )
        })}
    </Swiper>
      </div>
    
  )
}

export default Slider