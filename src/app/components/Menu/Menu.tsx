import React from 'react'

import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Link from '@mui/material/Link';

import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <MenuList role='menu-list' className={styles['menu-list-wrapper']}>
        <MenuItem><Link href="/"><span>01. </span>Chi sono</Link></MenuItem>
        <MenuItem><Link href="/"><span>02. </span>theLab.</Link></MenuItem>
        <MenuItem><Link href="/"><span>03. </span>Contatti</Link></MenuItem>
    </MenuList>
  )
}

export default Menu