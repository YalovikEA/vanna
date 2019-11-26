module.exports = function () {
	$.gulp.task('sass:dev', () => {
		return $.gulp.src('./src/styles/main.scss')
			.pipe($.gp.plumber())
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass({
				'include css': true
			}))
			.on('error', $.gp.notify.onError(function (error) {
				return {
					title: 'SASS',
					message: error.message
				};
			}))
			.pipe($.gp.postcss([
				require('webp-in-css/plugin')
			]))
			.pipe($.gp.autoprefixer({
				browsers: ['last 2 version']
			}))
			.pipe($.gp.csscomb())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('./build/styles/'))
			.pipe($.browserSync.reload({
				stream: true
			}));
	});

	$.gulp.task('sass:build', () => {
		return $.gulp.src('./src/styles/main.scss')
			.pipe($.gp.sass({
				'include css': true
			}))
			.pipe($.gp.postcss([
				require('webp-in-css/plugin')
			]))
			.pipe($.gp.autoprefixer({
				browsers: ['last 2 version']
			}))
			.pipe($.gp.csscomb())
			.pipe($.gp.csso())
			.pipe($.gulp.dest('./build/styles/'))
	});
};