/**非对称加密 */
const { Strategy, ExtractJwt } = require("passport-jwt");
const fs = require("fs");
const path = require("path");
const cert = fs.readFileSync(
	path.resolve(process.cwd(), "./src/server/pem/public_key.pem")
);
const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: cert,
	algorithms: ["RS256"]
};
module.exports = new Strategy(opts, async (jwtPayload, done) => {
	console.log("jwtPayload :>> ", jwtPayload);
	done(null, false);
});
