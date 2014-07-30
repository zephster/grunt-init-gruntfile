/*global module:false*/
module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig(
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      version: '0.1.0'
    },
    // Task configuration.
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        //list of files to concat.
        //eg: bootstrap module .js files
        src: [''],
        //final concatenated, un-uglified file, private.
        //eg: private/js/bootstrap.js
        dest: ''
      }
    },
    uglify: {
      //app js files
      js: {
        files: {
          //list of files to uglify. destination(public): source(private)
          //eg: public/assets/js/app.min.js' : ['private/js/app.js']
          '' : ['']
        }
      },
      //framework js files (jquery, bootstrap, etc)
      vendor: {
        files: {
          //destination(public) : source(private)
          //eg: public/assets/js/jquery.min.js' : ['bower_components/jquery/dist/jquery.js']
          '' : ['']
        }
      }
    },
    jshint: {
      files: ['<%= watch.js.files %>'], //auto jshint all watched js files
      options: {
        asi   : true,
        eqeqeq: false,
        jquery: true
      }
    },
    watch: {
      grunt: {
        files: ['Gruntfile.js'],
        tasks: ['uglify'] //tasks to run when gruntfile changes
      },
      js: {
        files: [''] //set (private source) files to watch. eg: private/js/app.js
      }
    }
  });

  // Default task.
  grunt.registerTask('build', ['jshint', 'concat', 'uglify']);
  grunt.registerTask('default', ['build','watch']);
};
