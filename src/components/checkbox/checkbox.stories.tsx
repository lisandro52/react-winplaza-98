import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './checkbox';

import Win98Provider from '../theme-providers/win98-theme';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <Win98Provider>
      <Checkbox id="default" label="This is a checkbox" />
    </Win98Provider>
  ),
};

export const Checked: Story = {
  render: () => (
    <Win98Provider>
      <Checkbox id="checked" defaultChecked label="I'm active" />
    </Win98Provider>
  ),
};

export const ReadOnly: Story = {
  render: () => (
    <Win98Provider>
      <Checkbox id="readonly" checked label="I'm read-only" />
    </Win98Provider>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Win98Provider>
      <Checkbox id="disabled" label="I'm inactive" disabled />
    </Win98Provider>
  ),
};

export const CheckedDisabled: Story = {
  render: () => (
    <Win98Provider>
      <Checkbox
        id="checkedisable"
        label="I'm checked and inactive"
        checked
        disabled
      />
    </Win98Provider>
  ),
};
