import { defineConfig } from 'vitest/config';

export default defineConfig({
  optimizeDeps: { include: ['vitest-browser-angular/setup-zones'] },
  test: {
    globals: true,
    setupFiles: ['./src/setup-zones.ts'],
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [{ browser: 'chromium' }],
    },
  },
});
