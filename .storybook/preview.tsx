import type { Preview } from '@storybook/react';
import React from 'react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', backgroundColor: '#c0c0c0' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: '98',
      values: [
        { name: '98', value: '#c0c0c0' },
        { name: 'XP', value: '#00bfff' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};

export default preview;
