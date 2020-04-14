import React, { FC } from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Button',
    component: Button,
};

export const Default: FC = () => <Button onClick={action('Clicked')} onMouseOver={action('Hovered')} />;
