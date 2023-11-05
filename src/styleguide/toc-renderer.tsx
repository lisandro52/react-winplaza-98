import React from 'react';

const TableOfContentsRenderer = ({
  children,
  searchTerm,
  onSearchTermChange,
}: any) => {
  return (
    <>
      <div className="desktop-nav">
        <nav>
          <div>
            <input
              value={searchTerm}
              placeholder="Filter by name"
              aria-label="Filter by name"
              onChange={(event) => onSearchTermChange(event.target.value)}
            />
          </div>
          {children}
        </nav>
      </div>
      <nav className="mobile-nav">{children}</nav>
    </>
  );
};

export default TableOfContentsRenderer;
