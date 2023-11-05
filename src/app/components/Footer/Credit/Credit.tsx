import React, {useState} from 'react';

import styles from './Credit.module.scss';

const Credit = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [startY, setStartY] = useState(0);

    const handleTouchStart = (e: any) => {
        setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: any) => {
        const currentY = e.touches[0].clientY;
        const deltaY = currentY - startY;
    
        if (deltaY > 0 && isOpen) {
          setIsOpen(false);
        } else if (deltaY < 0 && !isOpen) {
          setIsOpen(true);
        }
    };

    return (
        <div className={styles[`credit-wrapper ${isOpen ? 'open' : ''}`]}>
            <div 
                className={styles['credit-wrapper-handle']}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                Drag me
            </div>
            <div className="content">
                Content goes here
            </div>
        </div>
    )
}

export default Credit;