import gulp from 'gulp'
import uglify from 'gulp-uglify'
import cssnano from 'gulp-cssnano'
import htmlmin from 'gulp-htmlmin'
import gulpif from 'gulp-if'
import scripts from './scripts'
import styles from './styles'
import templates from './templates'
import images from './images'
import fonts from './fonts'
import critical from './critical'


const build = () => {
  gulp.src(['.tmp/**/*', 'src/*.*'])
  .pipe(gulpif('*.js', uglify()))
  .pipe(gulpif('*.css', cssnano()))
  .pipe(gulpif('*.html', htmlmin({
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true,
    removeAttributeQuites: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeOptionalTags: true,
    removeRedundantQuotes: true
  })))
  .pipe(gulp.dest('dist'))
}

gulp.task('build', [
  'scripts',
  'styles',
  'templates',
  'critical',
  'images',
  'fonts'
], build)


export default build
