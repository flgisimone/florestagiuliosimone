'use client'

import React from 'react'
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { TagCloudOptions } from "@frank-mayer/react-tag-cloud";

import textSphere from '../../utils/textSphere';

import styles from './TextSphere.module.scss';

const TextSphere = () => {
  
  return(
    <div className={styles['textSphere']}>
        <TagCloud
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "fast",
          })}
          onClick={(tag: string, e: MouseEvent) => alert(tag)}
          onClickOptions={{ passive: true }}
        >
          {textSphere}
       </TagCloud>
    </div>
  )

}

export default TextSphere;