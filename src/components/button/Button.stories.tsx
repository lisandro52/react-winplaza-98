// import React from 'react';
// import { withKnobs, text, boolean } from '@storybook/addon-knobs';
// import Button, { ButtonProps } from './Button';

// export default {
//   component: Button,
//   title: 'Components/Button',
//   decorators: [withKnobs],
// };

// export const Primary = () => {
//   const props: ButtonProps = {
//     disabled: boolean('Disabled', false),
//     children: text('Label', 'Click me'),
//   };

//   return <Button {...props} />;
// };

// Button.stories.ts|tsx

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

import Win98Provider from '../theme-providers/win98-theme';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => (
    <Win98Provider>
      <Button>Button</Button>
    </Win98Provider>
  ),
};

export const Active: Story = {
  render: () => (
    <Win98Provider>
      <Button active>I am being pressed</Button>
    </Win98Provider>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Win98Provider>
      <Button disabled>I cannot be clicked</Button>
    </Win98Provider>
  ),
};

export const Focused: Story = {
  render: () => (
    <Win98Provider>
      <Button focused>I am focused</Button>
    </Win98Provider>
  ),
};
