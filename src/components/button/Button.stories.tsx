import React from 'react';
import { ButtonProps, Button } from './Button';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

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
