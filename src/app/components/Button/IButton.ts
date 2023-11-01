import { ReactNode } from "react";

interface IButton {
    children: ReactNode;
    onClick: () => void;
    className: ReactNode;
}

export default IButton;