const Koa = require("koa");
const router = require("./routes");
const middleware = require("./middleware");
const app = new Koa();
app.use(middleware());
app.use(router());
module.exports = app;
