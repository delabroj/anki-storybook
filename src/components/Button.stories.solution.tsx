import React, { FC } from 'react';
import Button from './Button';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs],
};

const displayGroup = 'Display';
const behaviorGroup = 'Behavior';

export const Default: FC = () => (
    <Button
        onClick={() => alert('Clicked')}
        label={text('label', 'Click me', displayGroup)}
        toolTip={text('toolTip', 'Hovering', displayGroup)}
        disabled={boolean('disabled', false, behaviorGroup)}
    />
);
