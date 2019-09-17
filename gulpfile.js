const gulp = require('gulp');
const svgstore = require('gulp-svgstore');

const browserSync = require('browser-sync').create();

function server(){
    browserSync.init({
        port: 8888,
        server: {
            baseDir: './'
        }
    });
}

function isSvgstore(){
    //
}

// exports.styles = styles;
// exports.scripts = scripts;
// exports.glyphicon = glyphicon;
// exports.watch = watch;
// exports.build = gulp.series(sprite, images, gulp.parallel(styles, scripts));

// exports.default = gulp.parallel(server, watch);
exports.default = gulp.parallel(server);