import "core-js";
const app = require("./server");
const port = process.env.PORT || 4000;
(async () => {
	Promise.resolve().finally();

	let obj = { ...{} };

	globalThis.obj = obj;
	await app.listen(port);
	console.log(`Server started on port ${port}`);
})();
