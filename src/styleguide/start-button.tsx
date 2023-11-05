import React, { useState } from 'react';
import { Button } from '../components';
import icon from './icon.png';

const StartButton = ({ sidebar }: any) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="mobile-sidebar">
      {openMenu && (
        <div className="start-menu" onClick={() => setOpenMenu(false)}>
          {sidebar}
        </div>
      )}
      <div className="task-bar">
        <Button
          className="start-button"
          onClick={() => setOpenMenu((curr) => !curr)}
        >
          <img src={icon} className="start-icon" /> <b>Start</b>
        </Button>
      </div>
    </div>
  );
};

export default StartButton;
