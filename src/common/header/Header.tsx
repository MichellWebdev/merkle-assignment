import React from 'react';

import './Header.scss';

interface HeaderProps {
  header: string;
}

export const Header = ({ header }: HeaderProps) => (
  <div className='header-container'>
    <h1 className='no-margin page-container'>{header}</h1>
  </div>
);
