/** Misma configuración que usaba el CDN de Tailwind 3: el aspecto no cambia. */
export default {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        lab: {
          canvas: '#090E1A',
          surface: '#111827',
          panel: '#0F172A',
          border: '#1E293B',
          accent: '#0EA5E9',
        },
      },
    },
  },
};
