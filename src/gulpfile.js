const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

function defaultTask(cb) {
    console.log('hello gulp4');
    cb();
}
exports.log = defaultTask;

//檔案搬家任務
function move(){
    return src('index.html').pipe(dest('dist/'))
}
exports.mv = move;

//任務的順序
function TaskA(cb) {
    console.log('任務A');
    cb();
}
function TaskB(cb) {
    console.log('任務B');
    cb();
}
function TaskC(cb) {
    console.log('任務C')
    cb();
}
function TaskD(cb) {
    console.log('任務D')
    cb();
}
function TaskE(cb) {
    console.log('任務E')
    cb();
}
//照順序
exports.async = series(TaskA , TaskB);
//同時執行
exports.sync = parallel(TaskA , TaskB);
exports.all = series(TaskA , TaskB , parallel(TaskC , TaskD) , TaskE); 

// css 壓縮
//套件引入
const cleanCSS = require('gulp-clean-css'); 
//任務
function minicss(){
    return src('src/css/*.css')
    .pipe(cleanCSS())//壓縮CSS
    .pipe(dest('dist/css'))
}
//導出
exports.css = minicss;

//js壓縮
const uglify = require('gulp-uglify');
function minijs(){
    return src('src/js/*.js')
    .pipe(uglify())
    .pipe(dest('dist/js'))
}
exports.js = minijs;

//圖片搬家
const Img = function img(){
    return src('src/pictures/*.*')
    .pipe(dest('dist/pictures'))
}
exports.pic = Img;

// sass
const sass = require('gulp-sass')(require('sass'));
function sassstyle() {
    return src('src/sass/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        //.pipe(cleanCSS())壓縮CSS
        .pipe(dest('dist/css'));
}
exports.scss = sassstyle;

//合併 html
const fileinclude = require('gulp-file-include');
function headerfooter() {
    return src('src/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('dist/'));
};
exports.mytemplete = headerfooter;
//監聽
function taskWatch(){
    watch('src/sass/*.scss',sassstyle)
    watch(['src/*.html', 'src/layout/*.html'],headerfooter)
}
exports.w = (Img, taskWatch);

