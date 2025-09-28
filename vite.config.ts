/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	base: mode === 'production' ? '/auth2/' : '/',
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.ts',
	},
	resolve: {
		alias: {
			shared: path.resolve(__dirname, `src/shared`),
			widgets: path.resolve(__dirname, `src/widgets`),
			pages: path.resolve(__dirname, `src/pages`),
			entities: path.resolve(__dirname, `src/entities`),
		},
	},
}));
