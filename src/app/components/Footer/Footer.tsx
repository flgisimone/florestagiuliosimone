import React from 'react'
import Image
 from 'next/image';
import { SiReact, SiTypescript, SiNextdotjs, SiSass, SiMui } from 'react-icons/si';

import Typography from '@mui/material/Typography';

import styles from './Footer.module.scss';

const Footer = () => {

  const yearDefault = new Date();
  const year = yearDefault.getFullYear();

  return (
    <footer className={styles['footer']}>
      <Typography variant='body1'>
        Sviluppato da Giulio Simone Floresta - {year}
      </Typography>
      <div className={styles['footer-stack']}>
        <SiReact />
        <SiTypescript />
        <SiNextdotjs />
        <SiSass />
        <SiMui />
      </div>
      <Typography variant='body1' className={styles['deployment']}>
        Deployment on Vercel - CMS by Sanity
      </Typography>
    </footer>
  )
}

export default Footer;