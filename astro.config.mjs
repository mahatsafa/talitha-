// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://talitha-budaya-jatim.vercel.app',
  vite: { plugins: [tailwindcss()] },
});
