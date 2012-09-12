/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', '../server/*.js', '../client/*.js', '../tests/**/*.js']
    },
    qunit: {
      files: ['../tests/*.html']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
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
        unused: true,
        maxdepth: 3,
        maxstatements: 7,
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
  grunt.registerTask('default', 'lint qunit');

};
