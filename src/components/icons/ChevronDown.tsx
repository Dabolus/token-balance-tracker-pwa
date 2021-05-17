import React, { FunctionComponent } from 'react';
import { IconProps } from './model';

const ChevronDown: FunctionComponent<IconProps> = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}>
    <path
      fill="currentColor"
      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
    />
  </svg>
);

export default ChevronDown;
