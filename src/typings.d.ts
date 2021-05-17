interface ImportMeta {
  readonly env: ImportMetaEnv & {
    VITE_BITQUERY_API_KEY: string;
  };
}

declare module 'ethereum-blockies' {
  export interface CreateBlockieOptions {
    seed?: string;
    color?: string;
    bgcolor?: string;
    size?: number;
    scale?: number;
    spotcolor?: string;
  }

  const blockies: {
    create(options?: CreateBlockieOptions): HTMLCanvasElement;
    render(options?: CreateBlockieOptions, canvas?: HTMLCanvasElement): void;
  };

  export default blockies;
}
