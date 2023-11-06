import React from 'react';
import '98.css';
import './styleguide.css';
import StartButton from './start-button';

const StyleGuideRenderer = ({
  version,
  homepageUrl,
  children,
  toc,
  hasSidebar,
}: any) => {
  console.log(toc);
  return (
    <div className="root">
      <div className="full-content">
        {hasSidebar && <div className="desktop-sidebar">{toc}</div>}
        <StartButton sidebar={toc} />
        <main className="wrapper">
          <div className="title">
            <h1>React Winplaza 98</h1>
            <hr />
            <p className="subtitle">
              React components for creating a Win98-like web interface.
            </p>
          </div>
          {version && <h2>{version}</h2>}
          <div className="content">
            {children}
            <footer className="footer">
              Created with <a href={homepageUrl}>React Styleguidist</a>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StyleGuideRenderer;
