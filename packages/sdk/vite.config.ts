import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'EchoNuraTokaSDK',
      fileName: 'echo-nura-toka-sdk',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'webrtc'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [dts()],
});
