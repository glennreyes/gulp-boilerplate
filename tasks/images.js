import gulp from 'gulp'
import browserSync from 'browser-sync'
import imagemin from 'gulp-imagemin'
import clean from './clean'


const images = () => gulp.src('src/**/*.{png,jpg,gif,svg}')
  .pipe(imagemin())
  .pipe(gulp.dest('.tmp'))
  .pipe(browserSync.reload({ stream: true }))

gulp.task('images', ['clean'], images)


export default images
