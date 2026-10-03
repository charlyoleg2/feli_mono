import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vitest/config';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';

const basePath = process.env.BASE_PATH;
const dev = process.argv.includes('dev') || basePath === undefined;

export default defineConfig({
	plugins: [
		sveltekit({
			extensions: ['.svelte', '.svx', '.md'],
			// Consult https://svelte.dev/docs/kit/integrations
			// for more information about preprocessors
			preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx', '.md'] })],
			adapter: adapter(),
			paths: {
				base: dev ? '' : `/${basePath}`,
				relative: true /* true and false works!!! */
			}
		})
	],
	test: {
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
