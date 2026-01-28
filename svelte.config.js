import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'
    }),

    paths: {
      base: process.env.NODE_ENV === 'production' ? '/bofampama' : ''
      // ⚠️ DO NOT set `assets` unless you have a full CDN URL
    }
  }
};

export default config;
