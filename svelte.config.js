// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({}),

		kit: {
        // SET THE PATHS HERE

         adapter: adapter({
        	 edge: false,
		     split: true
        })
    }

};

export default config;
