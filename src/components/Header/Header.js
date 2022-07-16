import React from 'react';
import './Header.css';

export default function Header({ title }) {
  return (
    <>
      <h1 data-testid="header1" className="header">
        {title}
      </h1>
      {/* <h2 title="Header" className="header">
            Cats
        </h2> */}
    </>
  );
}
