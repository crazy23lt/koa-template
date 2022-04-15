/*global describe, it*/
const request = require("supertest");
const app = require("../src/server");
describe("测试 lib 路由 下属所有接口", () => {
	describe("GET /lib 列出所有图书馆", () => {
		it("should return 200", done => {
			request(app.listen()).get("/lib").expect(200, done);
		});
	});
	describe("post /lib 新建图书馆", () => {
		it("should return 200", done => {
			request(app.listen()).post("/lib").expect(200, done);
		});
	});
	describe("GET /lib/:id 查找某个指定图书馆", () => {
		it("should return 200", done => {
			request(app.listen()).get("/lib/123456").expect(200, done);
		});
	});
	describe("put /lib/:id 更新某个指定图书馆的全部信息", () => {
		it("should return 200", done => {
			request(app.listen()).put("/lib/12").expect(200, done);
		});
	});
	describe("patch /lib/:id 更新某个指定图书馆的部分信息", () => {
		it("should return 200", done => {
			request(app.listen()).patch("/lib/12").expect(200, done);
		});
	});
	describe("delete /lib/:id 删除某本图书", () => {
		it("should return 200", done => {
			request(app.listen()).delete("/lib/12").expect(200, done);
		});
	});
	describe("GET /lib/:id/books 列出某个指定图书馆的所有图书", () => {
		it("should return 200", done => {
			request(app.listen()).get("/lib/12/books").expect(200, done);
		});
	});
	describe("delete /lib/:id/books/:id 删除某个指定图书馆的指定图书", () => {
		it("should return 200", done => {
			request(app.listen()).delete("/lib/12/books/12").expect(200, done);
		});
	});
});
