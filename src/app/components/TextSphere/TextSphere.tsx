'use client'

import React, {useEffect} from 'react'

import TagCloud from "TagCloud";

import './TextSphere.css';

const TextSphere = () => {

    useEffect(() => {
        return () => {
          const container = ".tagcloud";
          const texts = [
            "HTML5",
            "JavaScript",
            "CSS3",
            "TypeScript",
            "React",
            "Next",
            "SASS",
            "Material-UI",
            "npm",
            "Git",
            "Jira",
            "Bitbucket",
          ];
    
          const options = {
            radius: 200,
            maxSpeed: "fast",
            initSpeed: "normal",
            keep: true,
          };
    
          TagCloud(container, texts, options);
        };
      }, []);

    return (
        <div className="text-shpere">
            <span className="tagcloud"></span>
        </div>
    )
}

export default TextSphere;