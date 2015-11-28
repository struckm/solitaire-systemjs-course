/* eslint-env node*/

module.exports = function (config) {
  "use strict";

  config.set({

    basePath: "./",

    files: [
      "app/bower_components/angular/angular.js",
      "app/bower_components/angular-route/angular-route.js",
      "app/bower_components/angular-mocks/angular-mocks.js",
      "app/bower_components/underscore/underscore.js"
    ],

    proxies: {
      '/node_modules': '/base/node_modules',
      '/base/cards': '/base/app/cards'
    },

    jspm: {
      config: 'app/config.js',
      packages: 'app/bower_components/system.js/dist',
      serveFiles: [
        'app/**/*.js',
        'node_modules/babel-core/browser.js'
      ],
      loadFiles: [
        'tests/cards/*.js',
        'tests/klondike/**/*.js'
      ]
    },

    autoWatch: true,

    frameworks: ["jspm", "jasmine"],

    browsers: ["Chrome"],

    plugins: [
      "karma-jspm",
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-jasmine",
      "karma-junit-reporter"
    ],

    junitReporter: {
      outputFile: "test_out/unit.xml",
      suite: "unit"
    }

  });
};
