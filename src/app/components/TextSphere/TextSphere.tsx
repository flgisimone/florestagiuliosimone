'use client'

import React, {useEffect} from 'react'

import TagCloud from "TagCloud";

import textSphere from '../../utils/textSphere';

import './TextSphere.scss';

const TextSphere = () => {

    useEffect(() => {
        return () => {
          const container = document.querySelector('.tagcloud');
    
          const options = {
            radius: 200,
            maxSpeed: "fast",
            initSpeed: "normal",
            keep: true,
          };
    
          // eslint-disable-next-line no-use-before-define
          TagCloud(container, textSphere, options); 
        };
      }, []);

    return (
        <div className="text-shpere">
            <span className="tagcloud"></span>
        </div>
    )
}

export default TextSphere;