"use strict";
/*global module:false*/

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    qunit: {
      files: ['../tests/*.html']
    },
    jasmine: {
        src: ['../client/router.js'],
        spec: ['../tests/jasmine/*.js'],
        errorReporting: true
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      all: [
        'Gruntfile.js', 
        '../server/server.js', 
        '../client/router.js', 
        '../client/main.js', 
        '../client/client.js', 
        '../tests/smoke/*.js',
        '../tests/unit/*.js'
      ],
      options: {
        bitwise: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        forin: true,
        indent: 2,
        nonew: true,
        regexp: true,
        //unused: true,
        //maxdepth: 3,
        //maxstatements: 7,
        jquery: true,
        node: true
      },
      globals: {
        Meteor: true,
        Template: true, 
        Backbone: true,
        Session: true
      }
    }
  });
  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit']);

  grunt.loadNpmTasks('grunt-jasmine-task');
};


