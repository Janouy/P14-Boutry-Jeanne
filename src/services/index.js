import axios from "axios";
import { setEmployees, addEmployee } from "../features/employeesSlice";

const { REACT_APP_API_URL } = process.env;

//Getemployees informations
export const getEmployeesData = () => {
	return (dispatch) =>
		axios
			.get(`${REACT_APP_API_URL}/employeesList`, null)
			.then((response) => {
				dispatch(setEmployees(response.data));
			})
			.catch(function (error) {
				//console.error(error);
			});
};

//Get user's bank informations with secure token
export const setEmployeesData = (newEmployeeData) => {
	return async (dispatch) =>
		axios
			.post(`${REACT_APP_API_URL}/employeesList`, newEmployeeData)
			.then((responses) => {
				dispatch(addEmployee(responses.data));
			})
			.catch(function (error) {
				//console.error(error);
			});
};
