const userController = require("../../controllers/user");
const { authLogin } = require("../../auth");
module.exports = router => {
	router.post("/register", authLogin(), userController.register);
	router.post("/login", userController.login);
};
