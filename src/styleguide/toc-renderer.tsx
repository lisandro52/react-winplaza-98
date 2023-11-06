import React from 'react';
import TextBox from '../components/text-box/text-box';

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
            <TextBox
              name="search"
              value={searchTerm}
              onChange={(event) => onSearchTermChange(event.target.value)}
              labelPosition="top"
              label="Filter by name"
              aria-label="Filter by name"
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
