const express = require("express");
const app = express();

function fetchJSONData(filename: string) {
	fetch("./sample.json")
		.then((res) => {
			if (!res.ok) {
				throw new Error
					(`HTTP error! Status: ${res.status}`);
			}
			return res.json();
		})
		.then((data) => 
			  console.log(data))
		.catch((error) => 
			   console.error("Unable to fetch data:", error));
}

app.get("/api/cars", (req: any, res: any) => {
	res.json(fetchJSONData("./data/cars.json"));
});

app.get("/api/parts", (req: any, res: any) => {
	res.json(fetchJSONData("./data/parts.json"));
});

app.listen(5000, () => {
	console.log("Server started on port 5000.");
});
