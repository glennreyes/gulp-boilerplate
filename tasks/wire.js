import gulp from 'gulp'
import { stream as wiredep } from 'wiredep'
import clean from './clean'


const wire = () => gulp.src('src/styles/*.scss')
  .pipe(wiredep({ ignorePath: /^(\.\.\/)+/ }))
  .pipe(gulp.dest('src/styles'))

gulp.task('wire', ['clean'], wire)


export default wire
