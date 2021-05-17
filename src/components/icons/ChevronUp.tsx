import React, { FunctionComponent } from 'react';
import { IconProps } from './model';

const ChevronDown: FunctionComponent<IconProps> = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <path
      fill="currentColor"
      d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
    />
  </svg>
);

export default ChevronDown;
