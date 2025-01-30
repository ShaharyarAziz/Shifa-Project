
module.exports = {
  video: true,
  videoUploadOnPasses: false,

  e2e: {
    setupNodeEvents(on, config) {
      watchForFileChanges: false
    },
  },
};
