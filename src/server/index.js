const Koa = require("koa");
const router = require("./routes");
const { auth } = require("./auth");
const middleware = require("./middleware");
const session = require("koa-session");
const app = new Koa();
/**@ 中间件异常捕获 */
app.use(async (ctx, next) => {
	try {
		await next();
	} catch (error) {
		ctx.status = 500;
		ctx.body = error.message;
		ctx.app.emit("error", error, ctx);
	}
});
app.keys = ["some secret hurr"];
app.use(session({}, app));
app.use(middleware());
app.use(auth());
app.use(router());
app.on("error", error => {
	console.log(error);
});
module.exports = app;
