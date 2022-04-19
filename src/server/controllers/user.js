/** user 业务层 */
module.exports = {
	register: ctx => {
		console.log("ctx.state.user :>> ", ctx.state.user);
		console.log("ctx.state.authInfo :>> ", ctx.state.authInfo);
		ctx.status = 200;
		ctx.body = "yes";
	},
	login: ctx => {
		ctx.status = 200;
		ctx.body = "yes";
	},
	wx: ctx => {
		ctx.status = 200;
		ctx.body = { title: "liuairiariawir" };
	}
};
