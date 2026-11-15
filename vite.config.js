import { defineConfig } from 'vite';

// App estática (HTML + JS en línea): Vite solo compila Tailwind y copia el logo.
// Base relativa: funciona en GitHub Pages (/PrinterLab/) y en cualquier subcarpeta.
export default defineConfig({
  base: './',
});
