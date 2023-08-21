import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Button from './button';

import Win98Provider from '../theme-providers/win98-theme';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
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
