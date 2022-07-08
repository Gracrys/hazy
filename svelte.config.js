// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({}),

		kit: {
        // SET THE PATHS HERE
        paths: { assets: "", base: "" },
        adapter: adapter({
            // NOT HERE!
            // paths: { base: "/PERSONAL_PATH" },
            fallback: 'index.html',
            precompress: false,
        })
    }

};

export default config;
