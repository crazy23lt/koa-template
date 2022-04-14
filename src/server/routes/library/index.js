/** user/auth  用户相相关业务，用户鉴权相关 */
const libController = require("../../controllers/lib");
module.exports = router => {
	router.get("/lib", libController.list); // 列出所有图书馆
	router.post("/lib", libController.create); // 新建图书馆
	router.get("/lib/:id", libController.search); // 查找某个指定图书馆
	router.put("/lib/:id", libController.upadate); // 更新某个指定图书馆的全部信息
	router.patch("/lib/:id", libController.modify); // 更新某个指定图书馆的部分信息
	router.delete("/lib/:id", libController.dellib); // 删除某本图书
	router.get("/lib/:id/books", libController.listbook); // 列出某个指定图书馆的所有图书
	router.delete("/lib/:id/books/:id", libController.delbook); // 删除某个指定图书馆的指定图书
};
