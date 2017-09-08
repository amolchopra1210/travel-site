var gulp = require("gulp"), 
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"), //adds prefixes to CSS elements for cross browser compatibility
    cssvars = require("postcss-simple-vars"), //SASS like post css variables
    nested = require("postcss-nested"), //to make nested styles like in SASS
    cssimport = require("postcss-import"), //for importing modules into the main css file
    mixins = require("postcss-mixins");
    
    gulp.task('styles', function(){
        return gulp.src('./app/styles/style.css')
        .pipe(postcss([cssimport, mixins, cssvars, nested, autoprefixer]))
        .on("error", function(errorInfo){
            console.log(errorInfo.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./app/temp/styles'));
});