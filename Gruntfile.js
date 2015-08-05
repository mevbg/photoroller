module.exports = function(grunt) {

'use strict';

/* CONFIGURATION */
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),


        // Code convention
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },

            plugin: {
                src: ['src/js/**/*.js']
            },

            page: {
                src: ['page/js/src/**/*.js']
            }
        },

        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },

            plugin: {
                src: ['src/css/<%= pkg.name.toLowerCase() %>.css']
            },
            
            page: {
                src: ['page/css/page.min.css']
            }
        },


        // Cleaning task configuration
        clean: {
            plugin_js:   ['dist/js'],
            plugin_css:  ['dist/css']
        },


        // JS tasks configuration
        concat: {
            options: {
                stripBanners: false
            },

            plugin: {
                src: ['src/js/jquery.<%= pkg.name.toLowerCase() %>.js'],
                dest: 'dist/js/jquery.<%= pkg.name.toLowerCase() %>.js'
            },

            page: {
                src: ['page/js/src/markdown.js', 'page/js/src/demo.js'],
                dest: 'page/js/page.js'
            }
        },

        uglify: {
            options: {
                sourceMap: true,
                preserveComments: 'some'
            },

            plugin: {
                src:  'dist/js/jquery.<%= pkg.name.toLowerCase() %>.js',
                dest: 'dist/js/jquery.<%= pkg.name.toLowerCase() %>.min.js'
            },

            page: {
                src:  'page/js/page.js',
                dest: 'page/js/page.min.js'
            },

            libs: {
                src:  'page/components/prism/prism.js',
                dest: 'page/components/prism/prism.min.js'
            }
        },


        // CSS tasks configuration
        less: {
            plugin_src: {
                options: { compress: false },
                files: {
                    'src/css/<%= pkg.name.toLowerCase() %>.css': 'src/css/less/<%= pkg.name.toLowerCase() %>.less'
                }
            },

            plugin_dist: {
                options: { compress: false },
                files: {
                    'dist/css/<%= pkg.name.toLowerCase() %>.css': 'src/css/less/<%= pkg.name.toLowerCase() %>.less'
                }
            },

            page: {
                options: {
                    compress: true,
                    sourceMap: true,
                    sourceMapURL: 'page.min.css.map',
                    sourceMapBasepath: 'page/css/src'                },
                files: {
                    'page/css/page.min.css': 'page/css/src/bundle.less'
                }
            }
        },

        cssmin: {
            options: {
                sourceMap: true,
                keepSpecialComments: '*'
            },

            plugin: {
                files: {
                    'dist/css/<%= pkg.name.toLowerCase() %>.min.css': ['dist/css/<%= pkg.name.toLowerCase() %>.css']
                }
            }
        },


        // Release tasks configuration
        bump: {
            options: {
                files: [
                    'package.json',
                    'bower.json'
                ],
                updateConfigs: ['pkg'],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['-a'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'origin',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false,
                prereleaseName: false,
                regExp: false
            }
        },

        replace: {
            readme: {
                src: [
                    'README.md',
                    'src/js/jquery.<%= pkg.name.toLowerCase() %>.js',
                    'src/css/less/<%= pkg.name.toLowerCase() %>.less'
                ],
                overwrite: true,
                replacements: [{
                    from: /\d+\.\d+\.\d+/,
                    to: '<%= pkg.version %>'
                }]
            }
        },


        // Listening task configuration
        watch: {
            js_plugin: {
                files: ['src/js/**/*.js'],
                tasks: ['js:plugin']
            },

            css_plugin: {
                files: ['src/css/less/**/*.less'],
                tasks: ['css:plugin']
            },

            js_page: {
                files: ['page/js/src/**/*.js'],
                tasks: ['js:page']
            },

            css_page: {
                files: ['page/css/src/**/*.less'],
                tasks: ['css:page']
            }
        }
    });



/* LOADING TASKS */
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.loadNpmTasks('grunt-contrib-watch');



/* REGISTERING TASKS */
    // Build task (default)
    grunt.registerTask('default', ['build']);
    
    grunt.registerTask('build', 'Running all tasks...', function() {
        grunt.task.run('js:plugin', 'css:plugin', 'js:page', 'css:page');
    });

    
    // Plugin tasks
    grunt.registerTask('js:plugin', 'Running only JS plugin tasks...', function() {
        grunt.task.run('jshint:plugin', 'clean:plugin_js', 'concat:plugin', 'uglify:plugin');
    });
    
    grunt.registerTask('css:plugin', 'Running only CSS plugin tasks...', function() {
        grunt.task.run('less:plugin_src', 'csslint:plugin', 'clean:plugin_css', 'less:plugin_dist', 'cssmin:plugin');
    });
    
    
    // Page tasks
    grunt.registerTask('js:page', 'Running only JS page tasks...', function() {
        grunt.task.run('jshint:page', 'uglify:libs', 'concat:page', 'uglify:page');
    });
    
    grunt.registerTask('css:page', 'Running only CSS page tasks...', function() {
        grunt.file.copy(
            'page/components/normalize-css/normalize.css',
            'page/css/src/initial/normalize.less'
        );
        grunt.file.copy(
            'page/components/prism/themes/prism-coy.css',
            'page/css/src/components/prism.less'
        );
        grunt.task.run('less:page', 'csslint:page');
    });


    // Release tasks
    grunt.registerTask('release:patch', 'Running patch release tasks...', function() {
        grunt.task.run('bump-only:patch', 'replace', 'build', 'bump-commit');
    });

    grunt.registerTask('release:minor', 'Running minor release tasks...', function() {
        grunt.task.run('bump-only:minor', 'replace', 'build', 'bump-commit');
    });

    grunt.registerTask('release:major', 'Running major release tasks...', function() {
        grunt.task.run('bump-only:major', 'replace', 'build', 'bump-commit');
    });

};