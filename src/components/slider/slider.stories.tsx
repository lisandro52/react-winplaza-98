import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Slider from './slider';

import Win98Provider from '../theme-providers/win98-theme';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

const DefaultSlider = () => {
  const [volume, setVolume] = useState(5);

  return (
    <Win98Provider>
      <Slider
        id="default"
        min={1}
        max={11}
        label="Volume"
        minLabel="Quiet"
        maxLabel="Loud"
        value={volume}
        onChange={(_, value) => setVolume(value)}
        style={{ maxWidth: 300 }}
      />
      <p>{volume}</p>
    </Win98Provider>
  );
};

export const Default: Story = {
  render: () => {
    const [volume, setVolume] = useState(5);

    return (
      <Win98Provider>
        <Slider
          id="default"
          min={1}
          max={11}
          label="Volume"
          minLabel="Quiet"
          maxLabel="Loud"
          value={volume}
          onChange={(_, value) => setVolume(value)}
          style={{ maxWidth: 300 }}
        />
        <p>{volume}</p>
      </Win98Provider>
    );
  },
};

export const BoxIndicator: Story = {
  render: () => (
    <Win98Provider>
      <Slider
        id="default"
        min={1}
        max={3}
        defaultValue={2}
        label="Cowbell"
        boxIndicator
        style={{ maxWidth: 300 }}
      />
    </Win98Provider>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Win98Provider>
      <Slider
        id="default"
        min={1}
        max={3}
        defaultValue={2}
        label="Vertical slider"
        boxIndicator
        vertical
        style={{ maxWidth: 300 }}
      />
    </Win98Provider>
  ),
};
