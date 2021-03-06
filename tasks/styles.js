import gulp from 'gulp'
import browserSync from 'browser-sync'
import sass from 'gulp-sass'
import sassGlob from 'gulp-sass-glob'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import clean from './clean'
import wire from './wire'


const styles = () => gulp.src('src/styles/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sassGlob())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('.tmp/styles'))
  .pipe(browserSync.reload({ stream: true }))

gulp.task('styles', ['clean', 'wire'], styles)


export default styles
