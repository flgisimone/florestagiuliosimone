'use client'

import React from 'react'

import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import useMedia from '@/app/hooks/useMedia';

import ISlider from './ISlider';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = ({children}: ISlider) => {

  const isMobile = useMedia();

  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={isMobile ? 1 : 4}
        navigation
        pagination={{ clickable: true }}
    >
        {children}
    </Swiper>
  )
}

export default Slider