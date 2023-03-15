import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {		  
		  wrap: true,
		},
	  },
	// Enable React to support React JSX components.
	integrations: [react(), tailwind()],
});
