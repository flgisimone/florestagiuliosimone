import React from 'react'

import IShowOnDesktop from './IShowOnDesktop'

import styles from './ShowOnDesktop.module.scss'

const ShowOnDesktop = ({children}: IShowOnDesktop) => {
  return (
    <div className={styles['ShowOnDesktop']}>
        {children}
    </div>
  )
}

export default ShowOnDesktop