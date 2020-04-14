import React, { FC, ReactElement } from 'react';
import Button from './Button';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs],
};

export const Default: FC = () => (
    <Button
        onClick={() => alert('Clicked')}
        label={text('label', 'Click me')}
        toolTip={text('toolTip', 'Hovering')}
        disabled={boolean('disabled', false)}
    />
);
