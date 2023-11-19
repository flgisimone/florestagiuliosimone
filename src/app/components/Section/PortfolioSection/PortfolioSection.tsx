'use client'

import React from 'react'

import {SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';

import {Typography} from '@mui/material'
import Skeleton from '@mui/material/Skeleton';

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
        <>{item.media ? 
            <Image src={item.media} width={300} height={300} alt={item.name} className={styles['project-image']}/> 
            : 
            <Skeleton variant="rectangular" sx={{ height: '350px' , background:'#666666'}} />
          }
        </>
        <div className={styles['project-wrapper-info']}>
          <Typography variant='inherit' className={styles['project-device']}>{item.device.map(el => <span key={el.id}>{el.icon}</span>)}</Typography>
          <div className={styles['project-wrapper-info__link']}>
            <Link href={item.repository} target='_blank' rel='noopener norefferer'><AiOutlineGithub /></Link>
            <Link href={item.site} target='_blank' rel='noopener norefferer'><AiOutlineLink /></Link>
            <Link href={item.site} target='_blank' rel='noopener norefferer'><AiOutlineArrowRight /></Link>
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
        {project ? 
          project 
          : 
          <div className={styles['skeleton-wrapper']}>
            <Skeleton variant="rectangular" sx={{ fontSize: '25px' , background:'#666666'}} />
            <Skeleton variant="rectangular" sx={{ height: '350px' , background:'#666666'}} />
            <Skeleton variant="rectangular" sx={{ fontSize: '25px' , background:'#666666'}} />
            <Skeleton variant="rectangular" sx={{ fontSize: '48px' , background:'#666666'}} />
            <Skeleton variant="rectangular" sx={{ fontSize: '25px' , background:'#666666'}} />
          </div>
        }
      </Slider>
    </section>
  )
}

export default PortfolioSection