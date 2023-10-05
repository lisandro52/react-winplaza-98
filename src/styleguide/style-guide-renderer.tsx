import React from 'react';
const StyleGuideRenderer = ({
  title,
  version,
  homepageUrl,
  children,
  toc,
  hasSidebar,
}: any) => (
  <div className="root">
    <h1>{title}</h1>
    {version && <h2>{version}</h2>}
    <main className="wrapper">
      {hasSidebar && <div className="sidebar">{toc}</div>}
      <div className="content">
        {children}
        <footer className="footer">
          `Created with [React Styleguidist](${homepageUrl})`
        </footer>
      </div>
    </main>
  </div>
);

export default StyleGuideRenderer;
