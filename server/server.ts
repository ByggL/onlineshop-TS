import express from "express";

const app = express();
const serverModel = require("./serverModel.js");

app.use(express.json());
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
	next();
});

app.get('/', (req, res) => {
	serverModel.getItems()
	.then((response: any) => {
	  res.status(200).send(response);
	})
	.catch((error: any) => {
	  res.status(500).send(error);
	})
})

app.post('/merchants', (req, res) => {
	serverModel.createItem(req.body)
	.then((response: any) => {
	  res.status(200).send(response);
	})
	.catch((error: any) => {
	  res.status(500).send(error);
	})
  })
  
app.delete('/merchants/:id', (req, res) => {
	serverModel.deleteItem(req.params.id)
	.then((response: any) => {
	  res.status(200).send(response);
	})
	.catch((error: any) => {
	  res.status(500).send(error);
	})
  })

app.put("/merchants/:id", (req, res) => {
	const id = req.params.id;
	const body = req.body;
	serverModel
	  .updateMerchant(id, body)
	  .then((response: any) => {
		res.status(200).send(response);
	  })
	  .catch((error: any) => {
		res.status(500).send(error);
	  });
});
  

app.listen(5000, () => {
  console.log("Server running on localhost:5000");
});