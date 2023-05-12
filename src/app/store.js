import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../features/employeesSlice";

// redux store configuration
export const store = configureStore({
	reducer: {
		list: employeesReducer,
	},
});
