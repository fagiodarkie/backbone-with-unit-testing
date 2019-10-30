module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js',
      'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min.js',
      'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min.js',
      'backbone_todo_model.js',
      'todo-test.js'
    ],
    reporters: ['junit', 'progress'],
    junitReporter: {
        outputDir: 'test-results',
        outputFile: "test-results.xml",
        useBrowserName: false
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity
  })
}