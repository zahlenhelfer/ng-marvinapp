import { defineConfig } from 'vitest/config';

// Coverage settings (reporters, thresholds, exclude) are configured in angular.json
// under projects.ng-marvinapp.architect.test.configurations.coverage.
// Run `npm run test:coverage` to generate a report.
//
// Note: @angular/build:unit-test currently uses the v8 provider regardless of
// the `provider` field here. @vitest/coverage-istanbul is installed and ready
// for direct `vitest` invocations outside the Angular CLI.
export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul',
    },
  },
});
