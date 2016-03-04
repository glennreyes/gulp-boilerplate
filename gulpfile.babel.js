import gulp from 'gulp'
import build from './tasks/build'
import serve from './tasks/serve'

gulp.task('default', ['build'])
