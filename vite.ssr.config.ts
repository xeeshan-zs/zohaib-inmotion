import { defineConfig, mergeConfig } from 'vite';
import config from './vite.config';

export default mergeConfig(config, defineConfig({
  build: { ssr: 'entry-server.tsx', outDir: '.ssr', emptyOutDir: true },
}));
