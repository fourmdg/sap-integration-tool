import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages: output estático
  output: 'static',

  // Server config
  server: {
    port: 4321,
    host: true,
  },

  // Base path (se for subpath no GH Pages, ex: /4mdg-hub/)
  // base: '/4mdg-hub/',

  // Build output
  outDir: './dist',

  // Aliases para imports limpos
  vite: {
    resolve: {
      alias: {
        '@core': '/src/core',
        '@idocs': '/src/features/idocs',
        '@docs': '/src/features/docs',
        '@tools': '/src/features/tools',
        '@features': '/src/features',
        '@shared': '/src/shared',
        '@home': '/src/features/home',
      },
    },
  },
});
