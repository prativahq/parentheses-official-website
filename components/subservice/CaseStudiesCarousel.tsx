"use client"
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CarouselCard from './CarouselCard';


const caseStudies = [
  {
    type: "Full Stack Development",
    title: "Nemu",
    desc: "Lorem ipsum dolor sit amet consectetur. Nisl neque sit id sed dictum non. Odio accumsan pharetra et id nisl morbi lectus pellentesque. Elit sapien aliquet pretium turpis nunc. Habitant rhoncus mattis tincidunt egestas blandit enim lectus donec vel.",
    img: "/raster/nemu.png"
  },
  {
    type: "Full Stack Development",
    title: "Nemu",
    desc: "Lorem ipsum dolor sit amet consectetur. Nisl neque sit id sed dictum non. Odio accumsan pharetra et id nisl morbi lectus pellentesque. Elit sapien aliquet pretium turpis nunc. Habitant rhoncus mattis tincidunt egestas blandit enim lectus donec vel.",
    img: "/raster/nemu.png"
  },
  {
    type: "Full Stack Development",
    title: "Nemu",
    desc: "Lorem ipsum dolor sit amet consectetur. Nisl neque sit id sed dictum non. Odio accumsan pharetra et id nisl morbi lectus pellentesque. Elit sapien aliquet pretium turpis nunc. Habitant rhoncus mattis tincidunt egestas blandit enim lectus donec vel.",
    img: "/raster/nemu.png"
  },
]



const CaseStudiesCarousel = () => {


  return (
    <section className=' min-h-svh space-y-4 m'>
      <h1 className='text-center text-primary_blue font-sfpd-semibold text-base md:text-lg'>CASE STUDIES</h1>
      <Swiper
        allowTouchMove={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        pagination={{
          clickable: true
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        centeredSlides={true}
        spaceBetween={10}
        className=' bg-gray-100 flex justify-center'>
        {
          caseStudies.map((item, idx) => (

            <SwiperSlide key={idx} className='py-20'>
              <CarouselCard {...item}/>
            </SwiperSlide>
          ))

        }
      </Swiper>
    </section>
  )
}

export default CaseStudiesCarousel