const passport = require("koa-passport");
const fs = require("fs");
const path = require("path");
const compose = require("koa-compose");
const jwt = require("jsonwebtoken");
const loginStrategy = require("./strategies/login");
const jwtStrategy = require("./strategies/jwt");

passport.use("login", loginStrategy);
passport.use("jwt", jwtStrategy);
// serializeUser  序列化 在用户登录成功后会将用户的数据存储到 session 中
passport.serializeUser((user, done) => {
	console.log("serializeUser :>> ", user);
	done(null, user);
});
// 在每一次请求的时候将从 session 中读取用户对象
passport.deserializeUser((user, done) => {
	console.log("deserializeUser :>> ", user);
	done(null, user);
});

const auth = () => compose([passport.initialize(), passport.session()]);
const isAuthenticated = () => passport.authenticate("jwt");
const authLogin = () => passport.authenticate("login");

const generateToken = () => async ctx => {
	const userid = "liut239463";
	const created = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 60; //两个月过期
	const privateKey = fs.readFileSync(
		path.resolve(process.cwd(), "./src/server/pem/private_key.pem")
	);
	const jwtToken = jwt.sign(
		{ id: userid, sub: "Acesss", exp: created },
		privateKey,
		{ algorithm: "RS256" }
	);
	const token = `Bearer ${jwtToken}`;
	ctx.status = 200;
	ctx.body = {
		userinfo: {
			token: token
		}
	};
};
module.exports = {
	isAuthenticated,
	generateToken,
	authLogin,
	auth
};
