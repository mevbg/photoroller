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

            demo: {
                src: ['demo_components/js/src/**/*.js']
            }
        },

        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },

            plugin: {
                src: ['src/css/<%= pkg.name.toLowerCase() %>.css']
            },
            
            demo: {
                src: ['demo_components/css/demo.min.css']
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

            demo: {
                src:  'demo_components/js/src/demo.js',
                dest: 'demo_components/js/demo.min.js'
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

            demo: {
                options: {
                    compress: true,
                    sourceMap: true,
                    sourceMapURL: 'demo.min.css.map',
                    sourceMapBasepath: 'demo_components/css/src'
                },
                files: {
                    'demo_components/css/demo.min.css': 'demo_components/css/src/demo.less'
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
                    'bower.json',
                    '<%= pkg.name.toLowerCase() %>.jquery.json'
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

            js_demo: {
                files: ['demo_components/js/src/**/*.js'],
                tasks: ['js:demo']
            },

            css_demo: {
                files: ['demo_components/css/src/**/*.less'],
                tasks: ['css:demo']
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
        grunt.task.run('js:plugin', 'css:plugin', 'js:demo', 'css:demo');
    });

    
    // Plugin tasks
    grunt.registerTask('js:plugin', 'Running only JS plugin tasks...', function() {
        grunt.task.run('jshint:plugin', 'clean:plugin_js', 'concat:plugin', 'uglify:plugin');
    });
    
    grunt.registerTask('css:plugin', 'Running only CSS plugin tasks...', function() {
        grunt.task.run('less:plugin_src', 'csslint:plugin', 'clean:plugin_css', 'less:plugin_dist', 'cssmin:plugin');
    });
    
    
    // Demo tasks
    grunt.registerTask('js:demo', 'Running only JS demo tasks...', function() {
        grunt.task.run('jshint:demo', 'uglify:demo');
    });
    
    grunt.registerTask('css:demo', 'Running only CSS demo tasks...', function() {
        grunt.task.run('less:demo', 'csslint:demo');
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