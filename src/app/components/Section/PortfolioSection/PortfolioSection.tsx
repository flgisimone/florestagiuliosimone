'use client'
import React from 'react'

import {SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';

import {Typography} from '@mui/material'

import { AiOutlineLink, AiOutlineGithub, AiOutlineArrowRight } from 'react-icons/ai';
import { BiCode, BiCodeAlt } from 'react-icons/bi';

import Slider from '../../Slider';
import portfolio from '../../../utils/portfolio';

import styles from './Portfolio.module.scss';

const PortfolioSection = () => {

  const project = portfolio.map(item => 
    <SwiperSlide key={item.id}>
      <div className={styles['project-wrapper']}>
        <Typography variant='h6' className={styles['project-name']}>{item.name}</Typography>
        <Image src={item.media} width={300} height={300} alt={item.name}/>
        <div className={styles['project-wrapper-info']}>
          <Typography variant='inherit' className={styles['project-device']}>{item.device.map(el => <span key={el.id}>{el.icon}</span>)}</Typography>
          <div className={styles['project-wrapper-info__link']}>
            <Link href={item.repository}><AiOutlineGithub /></Link>
            <Link href={item.site}><AiOutlineLink /></Link>
            <Link href={item.site}><AiOutlineArrowRight /></Link>
          </div>
        </div>
        <Typography variant='inherit' className={styles['project-overview']}>{item.overview}</Typography>
      </div>
    </SwiperSlide>
    )

  return (
    <section className={styles['portfolio-section']}>
      <Typography variant='h2'><BiCode />theLab.<BiCodeAlt /></Typography>
      <Slider>
        {project}
      </Slider>
    </section>
  )
}

export default PortfolioSection