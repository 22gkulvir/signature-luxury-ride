import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // Serve public/ assets at root (images, CNAME, favicons)
  publicDir: 'public',

  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        home:                resolve(__dirname, 'index.html'),
        about:               resolve(__dirname, 'about.html'),
        booking:             resolve(__dirname, 'booking.html'),
        feedback:            resolve(__dirname, 'feedback.html'),
        feedbackQr:          resolve(__dirname, 'feedback-qr.html'),
        fleet:               resolve(__dirname, 'fleet.html'),
        services:            resolve(__dirname, 'services.html'),
        signin:              resolve(__dirname, 'signin.html'),
        profile:             resolve(__dirname, 'profile.html'),
        underConstruction:   resolve(__dirname, 'under-construction.html'),
      },
    },
  },
});
