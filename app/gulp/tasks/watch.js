var gulp = require("gulp"), 
    watch = require("gulp-watch"), 
    browserSync = require("browser-sync").create(); 
    
    
    gulp.task('watch', function(){

    browserSync.init({
        notify : false, //to remove the notification sidebar that tells that content has been refreshed
        server : {
            baseDir : "app"
        }
    });

    watch('./app/index.html', function(){
       browserSync.reload();
    });

    watch('./app/styles/**/*.css', function(){
        gulp.start("cssInject");
    });
});
gulp.task("cssInject",['styles'], function(){
    return gulp.src("./app/temp/styles/style.css").pipe(browserSync.stream());
})