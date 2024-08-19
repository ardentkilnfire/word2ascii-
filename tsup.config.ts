import type { Options } from 'tsup';

export const tsup: Options = {
    splitting: false,
    clean: true,
    dts: true,
    keepNames: false,
    target: 'esnext',
    format: ['esm', 'cjs'],
    entryPoints: ['src/index.ts'],
    shims: true,
    noExternal: [/^[a-zA-Z]:/],
};
