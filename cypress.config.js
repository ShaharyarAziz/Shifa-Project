const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      video: true;
      videoCompression: 15;
    },
  },
});
