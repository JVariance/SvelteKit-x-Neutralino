import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';


let config;
const dev = process.env.NODE_ENV === 'development' ? true : false;

if (dev) {
	/** @type {import('@sveltejs/kit').Config} */
	config = {
		// Consult https://github.com/sveltejs/svelte-preprocess
		// for more information about preprocessors
		preprocess: preprocess(),

		kit: {
			// hydrate the <div id="svelte"> element in src/app.html
			target: '#svelte',
		}
	};
} else {
	/** @type {import('@sveltejs/kit').Config} */
	config = {
		// Consult https://github.com/sveltejs/svelte-preprocess
		// for more information about preprocessors
		preprocess: preprocess(),

		kit: {
			// hydrate the <div id="svelte"> element in src/app.html
			target: '#svelte',
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: 'index.html'
			}),
			ssr: false,
			paths: {
				base: '/resources'
			}
		}
	};
}

export default config;
