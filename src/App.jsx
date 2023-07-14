import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getEmployeesList } from "./selectors";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeesList from "./pages/EmployeesList";
import { getEmployeesData } from "./services";

function App() {
	const dispatch = useDispatch();
	const employeesList = useSelector(getEmployeesList);
	useEffect(() => {
		dispatch(getEmployeesData());
	}, [dispatch]);
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<CreateEmployee employeesList={employeesList} />} />
				<Route path="/employeesList" element={<EmployeesList employeesList={employeesList} />} />
			</Routes>
		</div>
	);
}

export default App;
