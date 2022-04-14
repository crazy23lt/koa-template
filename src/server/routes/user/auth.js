/** user/auth  用户相相关业务，用户鉴权相关 */
const userController = require("../../controllers/user");
module.exports = router => {
	router.get("/books", userController.all);
	router.get("/books/:id", userController.fetch);
	router.post("/books", userController.add);
	router.put("/books/:id", userController.modify);
	router.delete("/books/:id", userController.remove);
};
