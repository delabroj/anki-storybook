import React, { FC } from 'react';

interface ButtonProps {
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ disabled }: ButtonProps) => <button disabled={disabled}>Click Me!</button>;

export default Button;
