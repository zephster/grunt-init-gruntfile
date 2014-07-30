/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({{% if (min_concat) { %}
    // Metadata.{% if (package_json) { %}
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      version: '0.1.0'
    },{% } } %}
    // Task configuration.{% if (min_concat) { %}
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
    },{% } %}
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

  // These plugins provide necessary tasks.{% if (min_concat) { %}
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');{% } %}
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};
