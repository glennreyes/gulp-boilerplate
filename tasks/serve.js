import gulp from 'gulp'
import browserSync from 'browser-sync'
import watch from './watch'
import scripts from './scripts'
import styles from './styles'
import templates from './templates'
import images from './images'
import fonts from './fonts'
import critical from './critical'


const serve = prod => browserSync({
  notify: false,
  server: { baseDir: prod ? 'dist' : ['src', '.tmp'] }
})

gulp.task('serve', [
  'scripts',
  'styles',
  'templates',
  'images',
  'fonts',
  'critical'
], () => {
  serve(false)
  return watch()
})

gulp.task('serve:dist', ['build'], () => {
  serve(true)
  return this
})


export default serve
