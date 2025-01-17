import { MouseEventHandler, ReactNode } from "react";

export interface PrimaryButtonProps {
    label: string,
    disabled?: boolean,
    onTap?: MouseEventHandler,
    type?: "submit" | "button" | "reset" | undefined,
    children?: ReactNode
}