"use strict"

const gulp = require('gulp'),
	babelify = require('babelify'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	watchify = require('watchify'),
	rename = require('gulp-rename'),
	gutil = require('gulp-util');


const config = {
	src: './src/app.js',
	dest: './dist/'
};

let bundle = (bundler) => {
	bundler
		.bundle()
		.pipe(source('bundled-app.js'))
		.pipe(buffer())
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest(config.dest))
		.on('end', () => gutil.log(gutil.colors.green('==> Successful Bundle!')));
}

gulp.task('default', () => {

	let bundler = browserify(config.src, { debug: true })
		.plugin(watchify)
		.transform(babelify, { presets: ['es2015'] });

	bundle(bundler);

	bundler.on('update', () => bundle(bundler));
});