import { createSlice } from "@reduxjs/toolkit";

// creating a redux state for employees infos
export const employeesSlice = createSlice({
	name: "setEmployees",
	initialState: {
		employees: [],
	},
	reducers: {
		// Employees
		addEmployee: (state, action) => {
			state.employees.push(action.payload);
		},
	},
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
