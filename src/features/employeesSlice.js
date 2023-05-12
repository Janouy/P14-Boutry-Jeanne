import { createSlice } from "@reduxjs/toolkit";

// creating a redux state for employees infos
export const employeesSlice = createSlice({
	name: "list",
	initialState: {
		employeesList: [],
	},
	reducers: {
		// Employees
		addEmployee: (state, action) => {
			state.employeesList.push(action.payload);
		},
	},
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
