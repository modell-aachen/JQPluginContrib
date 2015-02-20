module.exports = function(grunt) {
  require('time-grunt')(grunt);

  var pkg = grunt.file.readJSON('package.json');
  var isPlugin = /Plugin$/.test( pkg.name );
  pkg.pubDir = 'pub/System/' + pkg.name;
  pkg.dataDir = 'data/System';
  pkg.libDirBase = 'lib/Foswiki/' + (isPlugin ? 'Plugins/': 'Contrib/');
  pkg.libDir = pkg.libDirBase + pkg.name;

  try {
    var bowerrc = grunt.file.readJSON('.bowerrc');
    pkg.bower = bowerrc.directory;
  } catch( e ) {
    pkg.bower = 'bower_components'
  }

  grunt.initConfig({
    pkg: pkg,

    uglify: {
      dev: {
        options: {
          beautify: true,
          compress: false,
          mangle: false,
          preserveComments: 'all'
        },
        files: {
          '<%= pkg.pubDir %>/moment.uncompressed.js': [
            '<%= pkg.bower %>/moment/min/moment-with-locales.js'
          ],
          '<%= pkg.pubDir %>/observe.uncompressed.js': [
            '<%= pkg.bower %>/jquery-observe/jquery-observe.js'
          ],
          '<%= pkg.pubDir %>/raphael.uncompressed.js': [
            '<%= pkg.bower %>/raphael/raphael.js'
          ],
          '<%= pkg.pubDir %>/spin.uncompressed.js': [
            '<%= pkg.bower %>/spin.js/spin.js',
            '<%= pkg.bower %>/spin.js/jquery.spin.js'
          ],
          '<%= pkg.pubDir %>/timezone.uncompressed.js': [
            '<%= pkg.bower %>/moment-timezone/build/moment-timezone-with-data.js',
            '<%= pkg.bower %>/moment-timezone/moment-timezone-utils.js'
          ],
          '<%= pkg.pubDir %>/tooltipster.uncompressed.js': [
            '<%= pkg.bower %>/tooltipster/js/jquery.tooltipster.js'
          ],
          '<%= pkg.pubDir %>/underscore.uncompressed.js': [
            '<%= pkg.bower %>/underscore/underscore.js'
          ]
        }
      },
      dist: {
        options: {
          compress: true,
          mangle: true,
          preserveComments: false
        },
        files: [{
          '<%= pkg.pubDir %>/moment.js': [
            '<%= pkg.bower %>/moment/min/moment-with-locales.js'
          ],
          '<%= pkg.pubDir %>/observe.js': [
            '<%= pkg.bower %>/jquery-observe/jquery-observe.js'
          ],
          '<%= pkg.pubDir %>/raphael.js': [
            '<%= pkg.bower %>/raphael/raphael.js'
          ],
          '<%= pkg.pubDir %>/spin.js': [
            '<%= pkg.bower %>/spin.js/spin.js',
            '<%= pkg.bower %>/spin.js/jquery.spin.js'
          ],
          '<%= pkg.pubDir %>/timezone.js': [
            '<%= pkg.bower %>/moment-timezone/build/moment-timezone-with-data.js',
            '<%= pkg.bower %>/moment-timezone/moment-timezone-utils.js'
          ],
          '<%= pkg.pubDir %>/tooltipster.js': [
            '<%= pkg.bower %>/tooltipster/js/jquery.tooltipster.js'
          ],
          '<%= pkg.pubDir %>/underscore.js': [
            '<%= pkg.bower %>/underscore/underscore.js'
          ]
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['uglify']);
}
