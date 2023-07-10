import { createSlice } from "@reduxjs/toolkit";
import { employeesList } from "../utils/employeesList";

// creating a redux state for employees infos
export const employeesSlice = createSlice({
	name: "list",
	initialState: {
		employeesList: employeesList,
	},
	reducers: {
		// Connected user's  informations
		setEmployees: (state, action) => {
			state.employeesList = action.payload;
		},
		// Employees
		addEmployee: (state, action) => {
			state.employeesList.push(action.payload);
		},
	},
});

export const { addEmployee, setEmployees } = employeesSlice.actions;
export default employeesSlice.reducer;
