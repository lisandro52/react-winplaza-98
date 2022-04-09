import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Window from './window';
import WindowTitle, {
  CloseButton,
  HelpButton,
  MaximizeButton,
  MinimizeButton,
  RestoreButton,
} from './window-title';
import WindowStatusBar, { StatusBarField } from './window-status-bar';

export default {
  component: Window,
  title: 'Components/Window',
  decorators: [withKnobs],
};

export const FullWindow = () => {
  return (
    <Window
      title={
        <WindowTitle
          inactive={boolean('Inactive', false)}
          title={text('Window title', 'A window title')}
        >
          <MinimizeButton />
          <MaximizeButton />
          <CloseButton />
        </WindowTitle>
      }
      statusBar={
        <WindowStatusBar>
          <StatusBarField>Press F12 for help</StatusBarField>
          <StatusBarField>Slide 1</StatusBarField>
          <StatusBarField>CPU Usage: 14%</StatusBarField>
        </WindowStatusBar>
      }
      width={300}
    >
      <p> There are just so many possibilities:</p>
      <ul>
        <li>A Task Manager</li>
        <li>A Notepad</li>
        <li>Or even a File Explorer!</li>
      </ul>
    </Window>
  );
};

export const AWindowTitle = () => {
  return (
    <>
      <p>
        The window title has a 'title' prop and accepts different kinds of
        buttons:
      </p>
      <Window
        width={300}
        title={
          <WindowTitle
            inactive={boolean('Inactive', false)}
            title={text('Window title', 'A window title')}
          >
            <MinimizeButton />
            <MaximizeButton />
            <CloseButton />
          </WindowTitle>
        }
      />
      <Window
        width={300}
        title={
          <WindowTitle
            inactive={boolean('Inactive', false)}
            title={text('Window title', 'A window title')}
          >
            <HelpButton />
            <CloseButton />
          </WindowTitle>
        }
      />
      <Window
        width={300}
        title={
          <WindowTitle
            inactive={boolean('Inactive', false)}
            title={text('Window title', 'A window title')}
          >
            <RestoreButton />
            <CloseButton />
          </WindowTitle>
        }
      />
    </>
  );
};
