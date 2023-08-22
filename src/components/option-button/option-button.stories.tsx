import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import OptionButton from './option-button';
import OptionGroup from './option-group';

import Win98Provider from '../theme-providers/win98-theme';

const meta: Meta<typeof OptionButton> = {
  title: 'Components/OptionButton',
  component: OptionButton,
};

export default meta;
type Story = StoryObj<typeof OptionButton>;

export const Default: Story = {
  render: () => (
    <Win98Provider>
      <OptionGroup id="default">
        <OptionButton label="Yes" value="Yes" />
        <OptionButton label="No" value="No"/>
      </OptionGroup>
    </Win98Provider>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Win98Provider>
      <OptionGroup id="disabled" defaultValue="2">
        <OptionButton label="Option 1" value="1" />
        <OptionButton label="Option 2" value="2" disabled/>
        <OptionButton label="Option 3" value="3" disabled/>
      </OptionGroup>
    </Win98Provider>
  ),
};
