import React, { FC, ReactNode } from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    toolTip?: string;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ label, onClick, toolTip, disabled }: ButtonProps) => (
    <button disabled={disabled} onClick={onClick} title={toolTip}>
        {label}
    </button>
);

export default Button;
