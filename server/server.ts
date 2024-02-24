const express = require("express");
const app = express();

const infos = {};

app.get("/api", (req: any, res: any) => {
	res.json(infos);
});

app.listen(5000, () => {
	console.log("Server started on port 5000.");
});
