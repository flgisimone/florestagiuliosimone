import React from 'react'

import Link from 'next/link';
import Image from 'next/image';

import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { IoMdArrowDropright } from 'react-icons/io';
import { BiCode, BiCodeAlt } from 'react-icons/bi';

import { Typography } from '@mui/material';

import TextSphere from '../../TextSphere';
import stack from '../../../utils/stack'

import styles from './AboutSection.module.scss'

const AboutSection = () => {

  const stackImg = stack.map((item, index) => <Image key={index} src={item ? item?.url : ''} alt={item ? item?.name : ''} width={88} height={28} />)

  return (
    <section className={styles['about-section']}>
        <div className={styles['about-section-header']}>
            <Typography variant='h2'><BiCode />Chi sono<BiCodeAlt /></Typography>
            <Typography>Sono Simone, Front-End Developer.</Typography>
            <ul>
              <Typography>Visita i miei profili Social <IoMdArrowDropright /></Typography>
              <Link href={'https://www.linkedin.com/in/giuliosimonefloresta/'}><BsLinkedin /></Link>
              <Link href={'https://github.com/flgisimone'}><BsGithub /></Link>
            </ul>
        </div>
        <div className={styles['about-section-blockquote']}>
            <Typography>Il mio approccio al lavoro è incentrato sulla voglia di creare <span>siti web</span> che siano <span>funzionali e facilmente navigabili</span>, dando particolare attenzione alle tematiche di UX/UI.</Typography>
            <Typography>Mi piace condividere idee e conoscenze con altri sviluppatori, designer e project manager, <span>al fine di realizzare progetti di successo</span> che rispondano alle esigenze dei clienti e degli utenti finali.</Typography>
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