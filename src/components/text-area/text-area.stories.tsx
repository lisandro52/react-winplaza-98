import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import TextArea from './text-area';

import Win98Provider from '../theme-providers/win98-theme';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  render: () => (
    <Win98Provider>
      <TextArea id="default" label="A big, ol' textarea" rows={6} style={{ maxWidth: 200 }} />
    </Win98Provider>
  ),
};

export const LabelPosition: Story = {
  render: () => (
    <Win98Provider>
      <TextArea
        id="add1"
        label="A left label"
        labelPosition="left"
        style={{ maxWidth: 200 }}
      />
    </Win98Provider>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Win98Provider>
      <TextArea
        id="disabled"
        label="Occupation"
        disabled
        value="Garden keeper"
        style={{ maxWidth: 200 }}
      />
    </Win98Provider>
  ),
};
