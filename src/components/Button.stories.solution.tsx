import React from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
};

export const Default = () => <Button />;
Default.story = {
    parameters: {
        notes: 'Enabled button',
    },
};

export const Disabled = () => <Button disabled />;
Disabled.story = {
    parameters: {
        notes: 'Disabled button',
    },
};
