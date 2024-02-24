import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";
import Home from "./pages/Home";

function App() {
	const [carsData, setcarsData] = useState([{}]);
	const [partsData, setpartsData] = useState([{}]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api/cars")
			.then((response) => response.json())
			.then((data) => {
				setcarsData(data);
			});
	}, []);

	useEffect(() => {
		fetch("/api/parts")
			.then((response) => response.json())
			.then((data) => {
				setpartsData(data);
			});
	}, []);

	if (!(partsData && carsData)) {
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
