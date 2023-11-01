'use client'

import React, {useState} from 'react'
import { AiOutlineMenuFold} from 'react-icons/ai';

import Link from '@mui/material/Link';

import ShowOnDesktop from '../ShowOnDesktop'
import ShowOnMobile from '../ShowOnMobile'

import { Typography } from '@mui/material';

import Button from '../Button';

import styles from './Header.module.scss'
import FlyoutMenu from '../FlyoutMenu';


const Header = () => {

    const slideInLeft = `${styles["flyout-menu-overlay"]} ${styles["slideInLeft"]}`;
    const [isActiveFlyoutMenu, setIsActiveFlyoutMenu] = useState(false);

    const onHandleFlyoutMenu = () => setIsActiveFlyoutMenu(!isActiveFlyoutMenu);

    return (
        <header className={styles['header-wrapper']}>
            <Typography variant='h4' className={styles['logo']}>FGS</Typography>
            <ShowOnDesktop>
            <nav role='menu' className={styles['menu']}>
                <ul>
                    <Link href="/"><span>01. </span>Chi sono</Link>
                    <Link href="/"><span>02. </span>theLab.</Link>
                    <Link href="/"><span>03. </span>Contatti</Link>
                </ul>
            </nav>
            </ShowOnDesktop>
            <ShowOnMobile>
                <>
                <Button onClick={onHandleFlyoutMenu}>
                    <AiOutlineMenuFold />
                </Button>
                {isActiveFlyoutMenu &&
                <FlyoutMenu
                    isActiveFlyoutMenu={isActiveFlyoutMenu}
                    setIsActiveFlyoutMenu={setIsActiveFlyoutMenu} 
                    slideInLeft={slideInLeft}
                >
                    <nav role='menu' className={styles['menu']}>
                        <ul>
                            <Link href="/"><span>01. </span>Chi sono</Link>
                            <Link href="/"><span>02. </span>theLab.</Link>
                            <Link href="/"><span>03. </span>Contatti</Link>
                        </ul>
                    </nav>
                </FlyoutMenu>
                }
                </>
            </ShowOnMobile>
        </header>
  )
}

export default Header