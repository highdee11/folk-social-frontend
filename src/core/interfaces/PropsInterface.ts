import { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";

export interface PrimaryButtonProps {
    label: string;
    disabled?: boolean;
    onTap?: MouseEventHandler;
    type?: "submit" | "button" | "reset" | undefined,
    children?: ReactNode;
}

export interface SideBarMenuItemProps {
    darkMode: boolean;
    label: string;
    url: string;
    children?: ReactNode
}

export interface CustomInputProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: ChangeEventHandler,
    prefixIcon?: ReactNode
}

export interface CustomPasswordInputProps extends CustomInputProps {
    
}