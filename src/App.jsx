import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeesList from "./pages/EmployeesList";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<CreateEmployee />} />
				<Route path="/employeesList" element={<EmployeesList />} />
			</Routes>
		</div>
	);
}

export default App;
