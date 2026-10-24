"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function BlogSlider() {

  return (

    <Swiper spaceBetween={20} slidesPerView={3}>

      <SwiperSlide>
        <div className="p-4 bg-white shadow rounded">
          Blog 1
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="p-4 bg-white shadow rounded">
          Blog 2
        </div>
      </SwiperSlide>

    </Swiper>

  )
}