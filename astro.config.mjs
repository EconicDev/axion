import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable React components in Astro
    react(),
    // Enable Tailwind with default configuration
    tailwind()
  ],
  // If you need to configure the site url
  site: 'https://your-site.com',
  // Preserve existing public directory
  publicDir: 'public',
});