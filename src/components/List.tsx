import { HTMLAttributes } from 'react';
import { styled } from '@linaria/react';

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number | string;
}

const computeCssGap = (gap: string | number = 16) =>
  typeof gap === 'string' ? gap : `${gap}px`;

const List = styled.div<ListProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => computeCssGap(gap)};
  padding: ${({ gap }) => computeCssGap(gap)};
  margin: 0 auto;
  max-width: 720px;
`;

export default List;
