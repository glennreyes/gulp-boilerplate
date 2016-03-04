import gulp from 'gulp'
import fs from 'fs'
import del from 'del'
import { stream as criticalStream } from 'critical'
import clean from './clean'
import templates from './templates'
import styles from './styles'


const critical = () => {
  const SETTINGS_GLOBAL = {
    inline: true,
    ignoreOptions: { matchDeclarationProperties: true }
  }
  const createCritical = templateFile => {
    const SETTINGS = JSON.parse(fs.readFileSync(`src/data/lang/${templateFile}`))
    gulp.src(`.tmp${SETTINGS.pathname}index.html`)
      .pipe(criticalStream(Object.assign({}, SETTINGS_GLOBAL, {
        base: `.tmp${SETTINGS.pathname}`,
        pathPrefix: SETTINGS.path
      })))
      .pipe(gulp.dest(`.tmp${SETTINGS.pathname}`))
  }

  fs.readdir('src/data/lang', (err, files) => {
    for (let i = 0; i < files.length; i++) {
      createCritical(files[i]);
    }
  })
}

gulp.task('critical', ['clean', 'styles', 'templates'], critical)


export default critical
