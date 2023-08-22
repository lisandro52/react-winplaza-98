import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import GroupBox from './group-box';

import Win98Provider from '../theme-providers/win98-theme';
import OptionGroup from '../option-button/option-group';
import OptionButton from '../option-button/option-button';

const meta: Meta<typeof GroupBox> = {
  title: 'Components/GroupBox',
  component: GroupBox,
};

export default meta;
type Story = StoryObj<typeof GroupBox>;

export const Default: Story = {
  render: () => (
    <Win98Provider>
      <GroupBox>
        <OptionGroup id="disabled" defaultValue="2">
          <OptionButton label="Option 1" value="1" />
          <OptionButton label="Option 2" value="2" disabled />
        </OptionGroup>
      </GroupBox>
    </Win98Provider>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Win98Provider>
      <GroupBox label="Select on option:">
        <OptionGroup id="disabled" defaultValue="2">
          <OptionButton label="Option 1" value="1" />
          <OptionButton label="Option 2" value="2" disabled />
        </OptionGroup>
      </GroupBox>
    </Win98Provider>
  ),
};
