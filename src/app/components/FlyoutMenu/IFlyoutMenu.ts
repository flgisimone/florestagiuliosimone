import { ReactNode } from "react";

interface IFlyoutMenu {
    children: ReactNode;
    isActiveFlyoutMenu: boolean;
    setIsActiveFlyoutMenu: (isActiveFlyoutMenu: boolean) => void;
    slideInLeft: any;
}

export default IFlyoutMenu