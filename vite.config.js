import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'public',

  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        home:              resolve(__dirname, 'index.html'),
        about:             resolve(__dirname, 'about.html'),
        booking:           resolve(__dirname, 'booking.html'),
        feedback:          resolve(__dirname, 'feedback.html'),
        feedbackQr:        resolve(__dirname, 'feedback-qr.html'),
        fleet:             resolve(__dirname, 'fleet.html'),
        services:          resolve(__dirname, 'services.html'),
        signin:            resolve(__dirname, 'signin.html'),
        profile:           resolve(__dirname, 'profile.html'),
        underConstruction: resolve(__dirname, 'under-construction.html'),
        /* FIX: branded 404 page — GitHub Pages serves dist/404.html for any
           unknown URL instead of the generic GitHub error page. */
        notFound:          resolve(__dirname, '404.html'),
      },
    },
  },
});
