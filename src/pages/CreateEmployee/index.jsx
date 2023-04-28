import React from "react";
import "./style.css";
import Form from "../../components/Form";

function CreateEmployee() {
	return (
		<div className="createEmployee">
			<h1>HRnet</h1>
			<div>View Current Employees</div>
			<h2>Create Employee</h2>
			<Form />
		</div>
	);
}

export default CreateEmployee;
