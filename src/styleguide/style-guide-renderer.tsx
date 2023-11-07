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
              React components for an <i>a e s t h e t i c</i> web interface.
            </p>
            <a href="https://badge.fury.io/js/react-winplaza-98">
              <img
                src="https://badge.fury.io/js/react-winplaza-98.svg"
                alt="npm version"
                height="18"
              />
            </a>
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
