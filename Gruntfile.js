/*jshint node: true */

var request = require('request');

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  var reloadPort = 35729, files;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    develop: {
      server: {
        file: 'bin/www'
      }
    },

    // Notify task
    notify:{
      jshint:{
        options:{
          message: 'No js errors'
        }
      }
    },

    // Sass Task
    sass: {
      dist: {
        files: {
          'app/css/style.css': 'app/css/style.scss'
        }
      }
    },


    // Jshint task 
    jshint:{
      options:{
        curly: true,
        unused: true,
        eqeqeq: true,
        quotmark: true,
        node: true,
        globals: ['it','describe','after','xit','beforeEach','before']
        },
        files:['Gruntfile.js','app.js','app/js/*.js','test/*.js','test/**/*.js']
    },

    // watch tasks
    watch: {
      options: {
        nospawn: true,
        livereload: reloadPort
      },
      server: {
        files: [
          'bin/www',
          'server.js',
          'routes/*.js'
        ],
        tasks: ['develop', 'delayed-livereload']
      },
      js: {
        files: ['app/js/*.js','test/**/*.js','Gruntfile.js'],
        tasks: ['jshint','notify'],
        options: {
          livereload: reloadPort
        }
      },
      css: {
        files: [
          'app/css/*.scss'
        ],
        tasks: ['sass'],
        options: {
          livereload: reloadPort
        }
      },
      views: {
        files: ['views/*.jade'],
        options: {
          livereload: reloadPort
        }
      }
    }
  });

  grunt.config.requires('watch.server.files');
  files = grunt.config('watch.server.files');
  files = grunt.file.expand(files);

  grunt.registerTask('delayed-livereload', 'Live reload after the node server has restarted.', function () {
    var done = this.async();
    setTimeout(function () {
      request.get('http://localhost:' + reloadPort + '/changed?files=' + files.join(','),  function (err, res) {
          var reloaded = !err && res.statusCode === 200;
          if (reloaded) {
            grunt.log.ok('Delayed live reload successful.');
          } else {
            grunt.log.error('Unable to make a delayed live reload.');
          }
          done(reloaded);
        });
    }, 500);
  });
  
  grunt.registerTask('default', [
    'notify',
    'jshint',
    'sass',
    'develop', 
    'watch'
  ]);
};
