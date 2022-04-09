import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import TextBox from './text-box';

export default {
  component: TextBox,
  title: 'Components/TextBox',
  decorators: [withKnobs],
};

export const Primary = () => {
  return (
    <TextBox
      id="primary"
      stacked={boolean('Stacked', false)}
      disabled={boolean('Disabled', false)}
      label={text('Textbox label', 'Textbox example')}
      style={{
        width: 200,
      }}
    />
  );
};
