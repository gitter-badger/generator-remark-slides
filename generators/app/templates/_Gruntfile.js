'use strict';


module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    replace: {
      slideware: {
        options: {
          patterns: [
            {
              match: 'css',
              replacement: grunt.file.read(pkg.slideware.css)
            },
            {
              match: 'title',
              replacement: pkg.name
            },
            {
              match: 'markdown',
              replacement: grunt.file.read(pkg.slideware.markdown)
            }
          ]
        },
        files: [
          {expand: false, flatten: true, src: pkg.slideware.template, dest: pkg.slideware.result }
        ]
      }
    }
  };

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-replace');
  grunt.registerTask('default','replace');
};
