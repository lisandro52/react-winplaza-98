import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TextBox from './text-box';

import Win98Provider from '../theme-providers/win98-theme';

const meta: Meta<typeof TextBox> = {
  title: 'Components/TextBox',
  component: TextBox,
};

export default meta;
type Story = StoryObj<typeof TextBox>;

export const Default: Story = {
  render: () => (
    <Win98Provider>
      <TextBox id="default" label="Occupation" style={{ maxWidth: 200 }} />
    </Win98Provider>
  ),
};

export const LabelPosition: Story = {
  render: () => (
    <Win98Provider>
      <TextBox
        id="add1"
        label="Address (Line 1)"
        labelPosition="top"
        style={{ maxWidth: 200 }}
      />
      <TextBox
        id="add2"
        label="Address (Line 2)"
        labelPosition="top"
        style={{ maxWidth: 200 }}
      />
    </Win98Provider>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Win98Provider>
      <TextBox
        id="disabled"
        label="Occupation"
        disabled
        value="Garden keeper"
        style={{ maxWidth: 200 }}
      />
    </Win98Provider>
  ),
};

export const InputTypes: Story = {
  render: () => (
    <Win98Provider>
      <TextBox
        id="email"
        label="Email"
        type="email"
        labelPosition="top"
        style={{ maxWidth: 200 }}
        defaultValue="example@contoso.com"
      />
      <TextBox
        id="password"
        label="Password"
        type="password"
        labelPosition="top"
        style={{ maxWidth: 200 }}
        defaultValue="password123"
      />
      <TextBox
        id="number"
        label="Number"
        type="number"
        labelPosition="top"
        style={{ maxWidth: 200 }}
        defaultValue={100}
      />
      <TextBox
        id="tel"
        label="Telephone"
        type="tel"
        labelPosition="top"
        style={{ maxWidth: 200 }}
        defaultValue="+1 555 8888"
      />
    </Win98Provider>
  ),
};
