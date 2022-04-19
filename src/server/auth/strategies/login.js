/**登录策略 */
const { Strategy } = require("passport-custom");
module.exports = new Strategy(async (ctx, done) => {
	const userinfo = { username: "liut", password: 123456 };
	try {
		if (ctx.body.username && ctx.body.password) {
			const bool =
				userinfo.username === ctx.body.username &&
				userinfo.password == ctx.body.password;
			if (!bool) done(null, false, "正确的");
			done(null, userinfo, "错误的");
		} else {
			done(null, false);
		}
	} catch (error) {
		done(error);
	}
});
