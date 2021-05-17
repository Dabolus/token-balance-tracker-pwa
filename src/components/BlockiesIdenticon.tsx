import React, {
  FunctionComponent,
  HTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import blockies, { CreateBlockieOptions } from 'ethereum-blockies';

export type BlockiesIdenticonProps = HTMLAttributes<HTMLCanvasElement> &
  CreateBlockieOptions;

const BlockiesIdenticon: FunctionComponent<BlockiesIdenticonProps> = ({
  seed,
  color = '#dfe',
  bgcolor = '#a71',
  size = 12,
  scale = 3,
  spotcolor = '#000',
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      blockies.render(
        { seed, color, bgcolor, size, scale, spotcolor },
        canvasRef.current,
      );
    }
  }, [bgcolor, color, scale, seed, size, spotcolor]);

  return <canvas ref={canvasRef} {...props} />;
};

export default BlockiesIdenticon;
