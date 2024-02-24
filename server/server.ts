const express = require("express");
const app = express();

const cars = require("./data/cars.json");
const parts = require("./data/parts.json");

function fetchJSONData(filename: string) {
	fetch(filename)
  		.then(response => response.json())
  		.then(json => console.log(json));
}

app.get("/api/cars", (req: any, res: any) => {
	res.json(cars); 
});

app.get("/api/parts", (req: any, res: any) => {
	res.json(parts);
});

app.listen(5000, () => {
	console.log("Server started on port 5000.");
});
