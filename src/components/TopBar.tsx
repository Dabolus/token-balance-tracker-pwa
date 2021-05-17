import React, { FunctionComponent } from 'react';
import { styled } from '@linaria/react';

const Header = styled.header`
  height: 64px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
`;

const TopBar: FunctionComponent = ({ children }) => (
  <Header>
    <h1>Your balance</h1>
    {children}
  </Header>
);

export default TopBar;
