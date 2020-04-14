import React, { FC, ReactNode } from 'react';

interface ButtonProps {
    onClick: () => void;
    onMouseOver: () => void;
}

const Button: FC<ButtonProps> = ({ onClick, onMouseOver }: ButtonProps) => (
    <button onClick={onClick} onMouseOver={onMouseOver}>
        Click Me!
    </button>
);

export default Button;
