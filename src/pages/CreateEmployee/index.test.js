import { render, screen, fireEvent } from "@testing-library/react";
import CreateEmployee from "./";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";
const employeesList = [
	{
		firstName: "John",
		lastName: "Smith",
		birthDate: "02.12.1990",
		startDate: "06.01.2015",
		street: "123 Main St",
		city: "New York",
		state: "NY",
		zipCode: "10001",
		department: "Sales",
		id: 1,
	},
	{
		firstName: "Emily",
		lastName: "Johnson",
		birthDate: "08.15.1985",
		startDate: "04.10.2010",
		street: "456 Elm St",
		city: "Los Angeles",
		state: "CA",
		zipCode: "90001",
		department: "Marketing",
		id: 2,
	},
];
describe("Component CreateEmployee", () => {
	it("Should render with no crash", () => {
		render(
			<Provider store={store}>
				<CreateEmployee employeesList={employeesList} />
			</Provider>,
			{ wrapper: BrowserRouter },
		);
	});
	describe("On click the 'View Current Employees' page link", () => {
		it("Should landing on the right page", () => {
			render(
				<Provider store={store}>
					<CreateEmployee employeesList={employeesList} />
				</Provider>,
				{ wrapper: BrowserRouter },
			);
			fireEvent.click(screen.getByText(/View Current Employees/i));
			expect(screen.getByText(/Current Employees/i)).toBeInTheDocument();
		});
	});
});
