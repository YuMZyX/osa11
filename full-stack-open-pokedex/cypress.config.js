const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
})
