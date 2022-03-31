import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector } from 'react-redux';
const Slider = () => {
    const mySlides = useSelector((state)=>state.Fav.favItems)
  return (
      <div className=' w-1/2 m-auto mt-32 '>
          <span className='text-3xl'>Your Favourite Items</span>
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