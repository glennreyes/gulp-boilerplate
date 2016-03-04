import gulp from 'gulp'
import browserSync from 'browser-sync'
import fs from 'fs'
import handlebars from 'gulp-compile-handlebars'
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'
import util from 'gulp-util'
import clean from './clean'


const templates = () => {
  const DATA_GLOBAL = JSON.parse(fs.readFileSync('src/data/global.json'))
  const createTemplates = templateFile => {
    const DATA = JSON.parse(fs.readFileSync(`src/data/lang/${templateFile}`))
    gulp.src('src/templates/*.hbs')
      .pipe(plumber())
      .pipe(handlebars(Object.assign({}, DATA_GLOBAL, DATA), {
        ignorePartials: true,
        batch: ['src/templates'],
        helpers: { deep: text => text }
      }))
      .pipe(rename(path => { path.extname = '.html' }))
      .pipe(gulp.dest('.tmp' + DATA.pathname))
      .pipe(browserSync.reload({stream: true}))
      .on('error', util.log)
  }

  fs.readdir('src/data/lang', (err, files) => {
    for (let i = 0; i < files.length; i++) {
      createTemplates(files[i]);
    }
  })
}

gulp.task('templates', ['clean'], templates)


export default templates
