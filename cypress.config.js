const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "k51n1h",
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: true,
  videoCompression: false,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 20000,
  reporter: 'cypress-mochawesome-reporter',
  retries: {
    runMode: 1,
    openMode: 1
  },
  env: {
    grepOmitFiltered: true
  },
  trashAssetsBeforeRuns: true,
  e2e: {
    specPattern: 'C:/CypressDemo/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
