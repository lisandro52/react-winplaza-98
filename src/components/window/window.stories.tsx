import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Window from './window';
import WindowTitle, {
  CloseButton,
  MaximizeButton,
  MinimizeButton,
} from './window-title';
import WindowBody from './window-body';
import WindowStatusBar, { StatusBarField } from './window-status-bar';

export default {
  component: Window,
  title: 'Components/Window',
  decorators: [withKnobs],
};

export const Primary = () => {
  return (
    <Window width={300}>
      <WindowTitle
        inactive={boolean('Inactive', false)}
        title={text('Window title', 'A window title')}
      >
        <MinimizeButton />
        <MaximizeButton />
        <CloseButton />
      </WindowTitle>
      <WindowBody>
        <p> There are just so many possibilities:</p>
        <ul>
          <li>A Task Manager</li>
          <li>A Notepad</li>
          <li>Or even a File Explorer!</li>
        </ul>
      </WindowBody>
      <WindowStatusBar>
        <StatusBarField>Press F1 for help</StatusBarField>
        <StatusBarField>Slide 1</StatusBarField>
        <StatusBarField>CPU Usage: 14%</StatusBarField>
      </WindowStatusBar>
    </Window>
  );
};
