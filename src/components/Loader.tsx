import React, { FunctionComponent, SVGProps } from 'react';
import { styled } from '@linaria/react';

export interface LoaderProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const Axes = styled.path`
  fill: none;
  stroke: #000;
  stroke-width: 2;
`;

const Line = styled.path`
  fill: none;
  stroke: var(--primary);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 66.05183410644531;
  stroke-dashoffset: 66.05183410644531;
  animation: 2s ease-in-out infinite dash;

  @keyframes dash {
    25%,
    50% {
      stroke-dashoffset: 0;
    }
    90%,
    100% {
      stroke-dashoffset: -66.05183410644531;
    }
  }
`;

const Loader: FunctionComponent<LoaderProps> = ({ size = 40, ...props }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <Axes d="M 1,1 1,63 63,63" />
    <Line d="M 5,40 24,24 40,32 60,20" />
  </svg>
);

export default Loader;
