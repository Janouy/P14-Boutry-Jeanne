import { createSlice } from "@reduxjs/toolkit";

// creating a redux state for employees infos
export const employeesSlice = createSlice({
	name: "list",
	initialState: {
		employeesList: [],
	},
	reducers: {
		// set employees list
		setEmployees: (state, action) => {
			state.employeesList = action.payload;
		},
		// Add an employee
		addEmployee: (state, action) => {
			state.employeesList.push(action.payload);
		},
	},
});

export const { addEmployee, setEmployees } = employeesSlice.actions;
export default employeesSlice.reducer;
