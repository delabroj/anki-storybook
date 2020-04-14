import React, { FC } from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button,
};

export const Default: FC = () => <Button />;

export const Disabled: FC = () => <Button disabled />;
