import React, { FC, ReactNode } from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ label, onClick, disabled }: ButtonProps) => (
    <button disabled={disabled} onClick={onClick}>
        {label}
    </button>
);

export default Button;
