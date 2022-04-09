import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button, { ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
  decorators: [withKnobs],
};

export const Primary = () => {
  const props: ButtonProps = {
    disabled: boolean('Disabled', false),
    children: text('Label', 'Click me'),
  };

  return <Button {...props} />;
};
