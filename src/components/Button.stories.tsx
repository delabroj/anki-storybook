import React, { FC, ReactElement } from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs, (story: () => ReactElement) => <div style={{ padding: '3rem' }}>{story()}</div>],
    parameters: {
        notes: 'A sweet button that can be disabled',
    },
};

export const Default: FC = () => <Button onClick={action('buttonClick')} label="Click me" />;

export const Disabled: FC = () => (
    <Button onClick={action('buttonClick')} disabled={boolean('disabaled', true)} label={text('label', 'Click me')} />
);
