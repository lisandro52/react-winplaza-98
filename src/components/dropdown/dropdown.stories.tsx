import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown, DropdownOption } from './dropdown';

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
        <DropdownOption value="1">Option 1</DropdownOption>
        <DropdownOption value="2">Option 2</DropdownOption>
        <DropdownOption value="3">Option 3</DropdownOption>
        <DropdownOption value="4">Option 4</DropdownOption>
      </Dropdown>
    </Win98Provider>
  ),
};

export const Selected: Story = {
  render: () => (
    <Win98Provider>
      <Dropdown name="selected" defaultValue="3">
        <DropdownOption value="1">Option 1</DropdownOption>
        <DropdownOption value="2">Option 2</DropdownOption>
        <DropdownOption value="3">Option 3</DropdownOption>
        <DropdownOption value="4">Option 4</DropdownOption>
      </Dropdown>
    </Win98Provider>
  ),
};
