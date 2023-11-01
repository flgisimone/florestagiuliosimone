import React from 'react'

import Link from 'next/link';

import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { IoMdArrowDropright } from 'react-icons/io';
import { Typography } from '@mui/material';

import stack from '../../../utils/stack'

import styles from './AboutSection.module.scss'
import TextSphere from '../../TextSphere';
import Image from 'next/image';


const AboutSection = () => {

  const stackImg = stack.map((item, index) => (<li key={index}> <Image src={item.url} alt={item.name} /></li>))

  return (
    <section className={styles['about-section']}>
        <div className={styles['about-section-header']}>
            <Typography variant='h2'><span>#</span>Chi sono</Typography>
            <Typography>Sono Simone, Front-End Developer.</Typography>
            <ul>
              <Typography variant='span'>Visita i miei profili Social <IoMdArrowDropright /></Typography>
              <Link href={'https://www.linkedin.com/in/giuliosimonefloresta/'}><BsLinkedin /></Link>
              <Link href={'https://github.com/flgisimone'}><BsGithub /></Link>
            </ul>
        </div>
        <div className={styles['about-section-blockquote']}>
            <Typography>"Il mio approccio al lavoro è incentrato sull'idea di creare <span>siti web</span> che siano <span>funzionali e facilmente navigabili</span>, dando particolare attenzione alle tematiche di UX/UI.</Typography>
            <Typography>Mi piace condividere idee e conoscenze con altri sviluppatori, designer e project manager, <span>al fine di realizzare progetti di successo</span> che rispondano alle esigenze dei clienti e degli utenti finali."</Typography>
        </div>
        <div className={styles['about-section-stack']}>
          <Typography variant='h3'>Stack tecnologico</Typography>
          <div className={styles['about-section-stack-coding']}>
            <ul>{stackImg}</ul>
          </div>
          <TextSphere />
        </div>
    </section>
  )
}

export default AboutSection