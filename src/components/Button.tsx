import { styled } from '@linaria/react';

const Button = styled.button`
  appearance: none;
  border: none;
  color: var(--text-on-primary);
  background: var(--primary);
  cursor: pointer;
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  &:hover,
  &:active,
  &:focus {
    filter: saturate(300%);
  }

  &[disabled] {
    filter: grayscale(100%);
    opacity: 0.6;
    pointer-events: none;
  }
`;

export default Button;
