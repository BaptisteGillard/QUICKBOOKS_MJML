var gulp = require("gulp");
var mjml = require("./src/index");

gulp.task("mjml", function() {
  return gulp
    .src("MJML/*.mjml")
    .pipe(mjml())
    .pipe(gulp.dest("./html"));
});


gulp.task('watch', function(){
  gulp.watch('**/*.mjml', gulp.series(['mjml']));
  // Other watchers
})
