import React from 'react'

import Button from '@mui/material/Button';

import IButton from './IButton'

import styles from './Button.module.scss'

const button = ({children, onClick}: IButton) => {
  return (
    <Button className={styles['button-primary']} onClick={onClick}>
        {children}
    </Button>
  )
}

export default button