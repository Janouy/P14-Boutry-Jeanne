import React from "react";
import "./style.css";
import Form from "../../components/Form";
import { Link } from "react-router-dom";

function CreateEmployee() {
	return (
		<div className="createEmployee">
			<h1>HRnet</h1>
			<Link className="pageTitle" to="/employeesList">
				View Current Employees
			</Link>
			<h2>Create Employee</h2>
			<Form />
		</div>
	);
}

export default CreateEmployee;
