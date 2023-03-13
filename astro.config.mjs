import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
	// Enable React to support React JSX components.
	integrations: [react(), tailwind(), astroI18next()],
});
