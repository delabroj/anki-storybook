import React, { FC } from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
};

export const Default: FC = () => <Button onClick={() => alert('Clicked')} label="Click me" />;

export const Disabled: FC = () => <Button onClick={() => alert('Clicked')} label="Click me" disabled />;
