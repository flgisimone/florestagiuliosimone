import React from 'react';

import { AiOutlineMenuUnfold} from 'react-icons/ai';

import IFlyoutMenu from './IFlyoutMenu';

import Button from '../Button';

const FlyoutMenu = ({children, isActiveFlyoutMenu, setIsActiveFlyoutMenu, slideInLeft}: IFlyoutMenu) => {

    const onHandleModal = () => setIsActiveFlyoutMenu(!isActiveFlyoutMenu);

    return (
        <>
        {isActiveFlyoutMenu &&
            <div className={slideInLeft}>
                <Button 
                    onClick={onHandleModal}
                >
                    <AiOutlineMenuUnfold />
                </Button>
                <div>
                    {children}
                </div>
            </div>
        }
        </>
    );
}

export default FlyoutMenu;