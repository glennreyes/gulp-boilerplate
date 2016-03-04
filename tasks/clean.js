import gulp from 'gulp'
import del from 'del'


const clean = () => del(['.tmp', 'dist'])

gulp.task('clean', clean)


export default clean
