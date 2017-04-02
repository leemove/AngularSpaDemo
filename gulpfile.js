
var gulp = require('gulp');

var browserSync = require('browser-sync').create();

var less = require('gulp-less');

var reload = browserSync.reload;

// gulp.task('debug', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });

// 静态服务器 + 监听 less/html 文件
gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch("less/*.less", ['less']);
    gulp.watch("./*.html").on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('less', function() {
    return gulp.src("less/*.less")
        .pipe(less())
        .pipe(gulp.dest("./css"))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);