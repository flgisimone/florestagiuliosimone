'use client'

import React, {useState} from 'react'
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import ShowOnDesktop from '../ShowOnDesktop'
import ShowOnMobile from '../ShowOnMobile'
import Menu from '../Menu';

import styles from './Header.module.scss'

type Anchor = 'right';

const Header = () => {

    const [activeDrawer, setActiveDrawer] = useState({right: false});

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.MouseEvent) => { 
        setActiveDrawer({ ...activeDrawer, [anchor]: open });
    }

    return (
        <header className={styles['header']}>
            <Typography variant='h4' className={styles['logo']}>FGS</Typography>
            <ShowOnDesktop>
                <Menu />
            </ShowOnDesktop>
            <ShowOnMobile>
                {(['right'] as const).map((anchor) =>
                    <div className={styles['header-drawer']} key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}><AiOutlineMenuFold /></Button>
                        <Drawer
                            anchor={anchor}
                            open={activeDrawer[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            <Button onClick={toggleDrawer(anchor, false)}><AiOutlineMenuUnfold /></Button>
                            <Menu />
                        </Drawer>
                    </div> 
                )}
            </ShowOnMobile>
        </header>
  )
}

export default Header