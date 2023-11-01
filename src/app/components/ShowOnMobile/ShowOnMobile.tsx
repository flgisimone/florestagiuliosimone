import React from 'react';

import IShowOnMobile from './IShowOnMobile';

import styles from './ShowOnMobile.module.scss';

const ShowOnMobile = ({children}: IShowOnMobile) => {
  return (
    <div className={styles['ShowOnMobile']}>
        {children}
    </div>
  )
}

export default ShowOnMobile