module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            templates: {
                files: ["src/hbs/**/*.hbs"],
                tasks: ["handlebars:compile"]
            }
        },
        handlebars: {
            compile: {
                options: {
                    commonjs: true,
                    processName: function(filePath) {
                        return filePath.match(/hbs\/src\/(.+?(?=\.hbs))/)[1];
                    }
                },
                files: { "src/hbs/jst.js" : ["src/hbs/src/**/*.hbs"] }
            }
        },
        shell: {
            dist: {
                command: "jspm bundle-sfx src/js/go.js dist/js/pxsmith.js --minify"
            }
        },
        targethtml: {
            localhost: {
                files: {
                    "src/index.html": "index.html"
                }
            },
            dist: {
                files: {
                    "dist/index.html": "index.html"
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    "dist/css/pxsmith.css": "src/css/pxsmith.css"
                }
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: "src/fonts",
                        src: ["**/*"],
                        dest: "dist/fonts/"
                    },
                    {
                        expand: true,
                        cwd: "src/img",
                        src: ["**/*"],
                        dest: "dist/img/"
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-handlebars");
    grunt.loadNpmTasks("grunt-shell");
    grunt.loadNpmTasks("grunt-targethtml");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("default", ["targethtml:localhost", "handlebars:compile"]);
    grunt.registerTask("dist", ["targethtml:dist", "handlebars:compile", "cssmin", "copy:dist", "shell:dist"]);

};
