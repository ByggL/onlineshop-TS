import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";
import Home from "./pages/Home";

function App() {
	const [backendData, setBackendData] = useState([{}]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api")
			.then((response) => response.json())
			.then((data) => {
				setBackendData(data);
				setLoading(false);
				console.log(data.skills);
				console.log(Object.entries(data.skills));
			});
	}, []);

	if (isLoading) {
		return (
			<Heading className="App" size="7xl">
				Loading...
			</Heading>
		);
	}

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
