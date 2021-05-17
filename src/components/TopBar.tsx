import React, { FunctionComponent } from 'react';
import { styled } from '@linaria/react';

const Header = styled.header`
  height: 64px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > * {
    margin: 0;
  }
`;

const TopBar: FunctionComponent = ({ children }) => (
  <Header>
    <h1>Your balance</h1>
    {children}
  </Header>
);

export default TopBar;
