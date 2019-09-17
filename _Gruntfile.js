module.exports = function(grunt) {

  grunt.initConfig({
    svgstore: {
      options: {
        formatting : {
          indent_size : 2
        }
      },
        default: {
          files: {
          'includes/defs.svg': ['svg/*.svg'],
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-svgstore');

};