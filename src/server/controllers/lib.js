/** library 业务层 */
module.exports = {
	list: async ctx => {
		ctx.status = 200;
		ctx.body = { code: 0, message: "列出所有图书馆" };
	},
	create: async ctx => {
		ctx.status = 200;
		ctx.body = { code: 0, message: "新建图书馆" };
	},
	search: async ctx => {
		ctx.status = 200;
		ctx.body = { code: 0, message: "查找某个指定图书馆" };
	},
	upadate: async ctx => {
		ctx.status = 200;
		ctx.body = { code: 0, message: "更新某个指定图书馆的全部信息" };
	},
	modify: async ctx => {
		ctx.status = 200;
		ctx.body = { code: 0, message: "更新某个指定图书馆的部分信息" };
	},
	dellib: async ctx => {
		ctx.status = 200;
		ctx.body = { code: 0, message: "删除某本图书" };
	},
	listbook: async ctx => {
		ctx.status = 200;
		ctx.body = { code: 0, message: "列出某个指定图书馆的所有图书" };
	},
	delbook: async ctx => {
		ctx.status = 200;
		ctx.body = { code: 0, message: "删除某个指定图书馆的指定图书" };
	}
};
