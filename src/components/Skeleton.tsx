import React, { FunctionComponent, HTMLAttributes } from 'react';
import { styled } from '@linaria/react';

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  count?: number;
  duration?: number;
  width?: number | string;
  height?: number | string;
  wrapper?: FunctionComponent;
  circle?: boolean;
}

const Shimmer = styled.span`
  background-color: var(--divider);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  display: inline-block;
  line-height: 1;
  width: 100%;
  animation: pulse 1s ease-in-out alternate infinite;

  @keyframes pulse {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`;

const Skeleton: FunctionComponent<SkeletonProps> = ({
  count = 1,
  duration,
  width,
  height,
  wrapper: Wrapper,
  circle,
  style: customStyle,
  ...props
}) => {
  const elements = [];

  for (let i = 0; i < count; i++) {
    elements.push(
      <Shimmer
        key={i}
        style={{
          width,
          height,
          ...(duration && { animationDuration: `${duration}s` }),
          ...(width && height && circle && { borderRadius: '50%' }),
          ...customStyle,
        }}
        {...props}
      >
        &zwnj;
      </Shimmer>,
    );
  }

  return (
    <span>
      {Wrapper
        ? elements.map((element, i) => (
            <Wrapper key={i}>
              {element}
              &zwnj;
            </Wrapper>
          ))
        : elements}
    </span>
  );
};

export default Skeleton;
