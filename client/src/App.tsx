import React, { SetStateAction, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";
import Home from "./pages/Home";

function App() {
	const [items, setItems] = useState(false);
  
	function getItems() {
	  fetch('http://localhost:5000')
		.then(response => {
		  return response.text();
		})
		.then(data => {
			setItems(data);
		});
	}
  
	function createItem() {
	  let name = prompt('Enter merchant name');
	  let email = prompt('Enter merchant email');
	  fetch('http://localhost:5000/merchants', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify({name, email}),
	  })
		.then(response => {
		  return response.text();
		})
		.then(data => {
		  alert(data);
		  getItems();
		});
	}
  
	function deleteItem() {
	  let id = prompt('Enter merchant id');
	  fetch(`http://localhost:5000/merchants/${id}`, {
		method: 'DELETE',
	  })
		.then(response => {
		  return response.text();
		})
		.then(data => {
		  alert(data);
		  getItems();
		});
	}
  
	function updateItem() {
	  let id = prompt('Enter merchant id');
	  let name = prompt('Enter new merchant name');
	  let email = prompt('Enter new merchant email');
	  fetch(`http://localhost:5000/merchants/${id}`, {
		method: 'PUT',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify({name, email}),
	  })
		.then(response => {
		  return response.text();
		})
		.then(data => {
		  alert(data);
		  getItems();
		});
	}
  
	useEffect(() => {
		getItems();
	}, []);

	return (
	  <div>
		{items ? items : 'There is no merchant data available'}
		<br />
		<button onClick={createItem}>Add item</button>
		<br />
		<button onClick={deleteItem}>Delete item</button>
		<br />
		<button onClick={updateItem}>Update item</button>
	  </div>
	);
  }
export default App;