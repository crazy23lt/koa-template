const del = require("delete");
const { series, dest, src } = require("gulp");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
// clean 函数没有被导出（export），因此被认为是私有任务 （private task）。
function clean(cb) {
	del(["dist/**"], cb);
}
// build 函数被导出（export），因此它是一个公开任务（public task），可以被 gulp 直接调用。
function build() {
	return src("src/**/*.js")
		.pipe(
			babel({
				presets: [["@babel/preset-env", { useBuiltIns: "usage", corejs: 3 }]]
			})
		)
		.pipe(uglify())
		.pipe(dest("dist"));
}
exports.default = series(clean, build);
