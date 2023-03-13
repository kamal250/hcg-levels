import i18n from "astro-i18n"
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	// Enable React to support React JSX components.
	integrations: [i18n(),react(), tailwind()],
});
