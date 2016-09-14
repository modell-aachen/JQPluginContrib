module.exports = function(grunt) {
  require('time-grunt')(grunt);

  var pkg = grunt.file.readJSON('package.json');
  var isPlugin = /Plugin$/.test( pkg.name );
  pkg.pubDir = 'pub/System/' + pkg.name;
  pkg.dataDir = 'data/System';
  pkg.libDirBase = 'lib/Foswiki/' + (isPlugin ? 'Plugins/': 'Contrib/');
  pkg.libDir = pkg.libDirBase + pkg.name;
  pkg.srcDir = 'src';

  try {
    var bowerrc = grunt.file.readJSON('.bowerrc');
    pkg.bower = bowerrc.directory;
  } catch( e ) {
    pkg.bower = 'bower_components';
  }

  grunt.initConfig({
    pkg: pkg,

    copy: {
      assets: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              '<%= pkg.bower %>/fancytree/dist/skin-win8/icons.gif',
              '<%= pkg.bower %>/fancytree/dist/skin-win8/loading.gif'
            ],
            dest: '<%= pkg.pubDir %>/css/'
          }
        ],
      },
      compressed: {
        files: [
          {
            expand: false,
            flatten: true,
            src: [
              '<%= pkg.bower %>/fancytree/dist/skin-win8/ui.fancytree.min.css'
            ],
            dest: '<%= pkg.pubDir %>/css/fancytree.css'
          }
        ],
      },
      uncompressed: {
        files: [
          {
            expand: false,
            flatten: true,
            src: [
              '<%= pkg.bower %>/fancytree/dist/skin-win8/ui.fancytree.css'
            ],
            dest: '<%= pkg.pubDir %>/css/fancytree.uncompressed.css'
          }
        ],
      }
    },

    sass: {
      dev: {
        options: {
          outputStyle: 'nested',
        },
        files: {
          '<%= pkg.pubDir %>/css/sweetalert2.uncompressed.css':
            ['<%= pkg.bower %>/sweetalert2/src/sweetalert2.scss'],
          '<%= pkg.pubDir %>/css/tooltipster.uncompressed.css': [
            '<%= pkg.bower %>/tooltipster/dist/css/tooltipster.bundle.css',
            '<%= pkg.bower %>/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-borderless.min.css',
            '<%= pkg.bower %>/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-light.min.css',
            '<%= pkg.bower %>/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-noir.min.css',
            '<%= pkg.bower %>/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-shadow.min.css'
          ]
        }
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          '<%= pkg.pubDir %>/css/sweetalert2.css':
            ['<%= pkg.bower %>/sweetalert2/src/sweetalert2.scss'],
          '<%= pkg.pubDir %>/css/tooltipster.css': [
            '<%= pkg.bower %>/tooltipster/dist/css/tooltipster.bundle.css',
            '<%= pkg.bower %>/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-borderless.min.css',
            '<%= pkg.bower %>/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-light.min.css',
            '<%= pkg.bower %>/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-noir.min.css',
            '<%= pkg.bower %>/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-shadow.min.css'
          ]
        }
      }
    },

    uglify: {
      dev: {
        options: {
          beautify: true,
          compress: false,
          mangle: false,
          preserveComments: 'all'
        },
        files: {
          '<%= pkg.pubDir %>/fancytree.uncompressed.js': [
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.js',
            '<%= pkg.srcDir %>/jquery.fancytree.childcounter.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.clones.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.dnd.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.edit.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.filter.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.glyph.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.gridnav.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.menu.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.persist.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.table.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.themeroller.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.wide.js'
          ],
          '<%= pkg.pubDir %>/justgage.uncompressed.js': [
            '<%= pkg.bower %>/justgage/justgage.js'
          ],
          '<%= pkg.pubDir %>/moment.uncompressed.js': [
            '<%= pkg.bower %>/moment/min/moment-with-locales.js'
          ],
          '<%= pkg.pubDir %>/observe.uncompressed.js': [
            '<%= pkg.bower %>/jquery-observe/jquery-observe.js'
          ],
          '<%= pkg.pubDir %>/raphael.uncompressed.js': [
            '<%= pkg.bower %>/raphael/raphael.js'
          ],
          '<%= pkg.pubDir %>/readmore.uncompressed.js': [
            '<%= pkg.bower %>/Readmore.js/readmore.js'
          ],
          '<%= pkg.pubDir %>/spin.uncompressed.js': [
            '<%= pkg.bower %>/spin.js/spin.js',
            '<%= pkg.bower %>/spin.js/jquery.spin.js'
          ],
          '<%= pkg.pubDir %>/sweetalert2.uncompressed.js': [
            '<%= pkg.srcDir %>/sweetalert2.js'
          ],
          '<%= pkg.pubDir %>/timezone.uncompressed.js': [
            '<%= pkg.bower %>/moment-timezone/build/moment-timezone-with-data.js',
            '<%= pkg.bower %>/moment-timezone/moment-timezone-utils.js'
          ],
          '<%= pkg.pubDir %>/tooltipster.uncompressed.js': [
            '<%= pkg.bower %>/tooltipster/dist/js/tooltipster.bundle.js'
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
          '<%= pkg.pubDir %>/fancytree.js': [
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.js',
            '<%= pkg.srcDir %>/jquery.fancytree.childcounter.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.clones.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.dnd.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.edit.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.filter.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.glyph.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.gridnav.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.menu.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.persist.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.table.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.themeroller.js',
            '<%= pkg.bower %>/fancytree/dist/src/jquery.fancytree.wide.js'
          ],
          '<%= pkg.pubDir %>/justgage.js': [
            '<%= pkg.bower %>/justgage/justgage.js'
          ],
          '<%= pkg.pubDir %>/moment.js': [
            '<%= pkg.bower %>/moment/min/moment-with-locales.js'
          ],
          '<%= pkg.pubDir %>/observe.js': [
            '<%= pkg.bower %>/jquery-observe/jquery-observe.js'
          ],
          '<%= pkg.pubDir %>/raphael.js': [
            '<%= pkg.bower %>/raphael/raphael.js'
          ],
          '<%= pkg.pubDir %>/readmore.js': [
            '<%= pkg.bower %>/Readmore.js/readmore.js'
          ],
          '<%= pkg.pubDir %>/spin.js': [
            '<%= pkg.bower %>/spin.js/spin.js',
            '<%= pkg.bower %>/spin.js/jquery.spin.js'
          ],
          '<%= pkg.pubDir %>/sweetalert2.js': [
            '<%= pkg.srcDir %>/sweetalert2.js'
          ],
          '<%= pkg.pubDir %>/timezone.js': [
            '<%= pkg.bower %>/moment-timezone/build/moment-timezone-with-data.js',
            '<%= pkg.bower %>/moment-timezone/moment-timezone-utils.js'
          ],
          '<%= pkg.pubDir %>/tooltipster.js': [
            '<%= pkg.bower %>/tooltipster/dist/js/tooltipster.bundle.js'
          ],
          '<%= pkg.pubDir %>/underscore.js': [
            '<%= pkg.bower %>/underscore/underscore.js'
          ]
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['build', 'copy']);
  grunt.registerTask('build', ['sass', 'uglify']);
};
