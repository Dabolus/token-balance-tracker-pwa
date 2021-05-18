import { styled } from '@linaria/react';
import { HTMLAttributes } from 'react';

export type CardProps = HTMLAttributes<HTMLDivElement>;

const Card = styled.div<CardProps>`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: var(--card-background);
`;

export default Card;
