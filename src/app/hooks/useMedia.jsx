'use client'

import { useState, useEffect } from 'react';

const useMedia = () => {
    
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window?.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
          
          setIsMobile(window?.innerWidth < 768); 
        };
    
        window?.addEventListener('resize', handleResize); 
    
        return () => {
          window?.removeEventListener('resize', handleResize);
        };
      }, []);

    return isMobile
}

export default useMedia