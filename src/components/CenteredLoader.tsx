import { styled } from '@linaria/react';
import Loader, { LoaderProps } from './Loader';

export type CenteredLoaderProps = LoaderProps;

const CenteredLoader = styled(Loader)`
  position: absolute;
  top: ${({ size = 40 }) => `calc(50% - ${size / 2}px)`};
  left: ${({ size = 40 }) => `calc(50% - ${size / 2}px)`};
`;

export default CenteredLoader;
