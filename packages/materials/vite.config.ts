import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'cls',
      fileName: (format) => `cls.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'antd'],
      output: {
        globals: {
          react: 'react',
          antd: 'antd',
          'react-dom': 'react-dom',
        },
      },
      plugins: [
        typescript({
          target: 'es2015', // 这里指定编译到的版本，
          rootDir: resolve(__dirname, 'src/'),
          declaration: true,
          declarationDir: resolve(__dirname, 'dist'),
          exclude: resolve(__dirname, 'node_modules/**'),
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
  },
});
