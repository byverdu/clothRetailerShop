module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/components/angular/angular.js',
      'app/components/angular-mocks/angular-mocks.js',
      'app/components/angular-resource/angular-resource.js',
      'app/js/**/*.js', 
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['mocha','chai'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-mocha',
            'karma-chai-plugins',
            'karma-mocha-reporter',
            ],

    reporters: ['mocha']

  });
};
