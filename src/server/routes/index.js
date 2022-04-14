const Router = require("koa-router");
const compose = require("koa-compose");
const importDir = require("import-dir");
const routerConfigs = [
	{ folder: "library", prefix: "" } /**user 业务相关路由 */
];
module.exports = () => {
	const composed = routerConfigs.reduce((prev, curr) => {
		const Routes = importDir(`./${curr.folder}`);
		const router = new Router({
			prefix: curr.prefix
		});
		Object.keys(Routes).map(name => Routes[name](router));
		return [router.routes(), router.allowedMethods(), ...prev];
	}, []);
	return compose(composed);
};
