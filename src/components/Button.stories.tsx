import React, { FC, ReactElement } from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
};

export const Default: FC = () => <Button onClick={() => alert('Clicked')} onMouseOver={() => alert('Hovered')} />;
