import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './dropdown';

import Win98Provider from '../theme-providers/win98-theme';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => (
    <Win98Provider>
      <Dropdown name="default">
        <Dropdown.Option value="1">Option 1</Dropdown.Option>
        <Dropdown.Option value="2">Option 2</Dropdown.Option>
        <Dropdown.Option value="3">Option 3</Dropdown.Option>
        <Dropdown.Option value="4">Option 4</Dropdown.Option>
      </Dropdown>
    </Win98Provider>
  ),
};

export const Selected: Story = {
  render: () => (
    <Win98Provider>
      <Dropdown name="selected" defaultValue="3">
        <Dropdown.Option value="1">Option 1</Dropdown.Option>
        <Dropdown.Option value="2">Option 2</Dropdown.Option>
        <Dropdown.Option value="3">Option 3</Dropdown.Option>
        <Dropdown.Option value="4">Option 4</Dropdown.Option>
      </Dropdown>
    </Win98Provider>
  ),
};
