'use client'

import React, {useEffect, useRef} from 'react'

import TagCloud from "TagCloud";

import textSphere from '../../utils/textSphere';

import './TextSphere.scss';

const TextSphere = () => {

  let container;

    useEffect(() => {
        return () => {
          container = '.tagcloud';
    
          const options: {} = {
            radius: 200,
            maxSpeed: "fast",
            initSpeed: "normal",
            keep: true,
          };
    
          TagCloud(container , textSphere, options); 
        };
      }, []);

    return (
        <div className="text-shpere">
            <span className="tagcloud"></span>
        </div>
    )
}

export default TextSphere;