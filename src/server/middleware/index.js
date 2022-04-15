const path = require("path");
const logger = require("koa-logger");
const compose = require("koa-compose");
const koaBody = require("koa-body");
const staticserver = require("koa-static");
const ignoreAssets = mv =>
	async function (ctx, next) {
		if (/(\.js|\.css|\.ico)$/.test(ctx.path)) {
			await next();
		} else {
			await mv.call(this, ctx, next);
		}
	};
const notFound = async (ctx, next) => {
	await next();
	if (ctx.body || !ctx.idempotent) return;
	ctx.redirect("/404.html");
};
module.exports = () =>
	compose([
		ignoreAssets(logger()),
		staticserver(path.join(__dirname, "../../static")),
		notFound,
		koaBody({
			jsonLimit: "1kb",
			multipart: true
		})
	]);
