import { render, screen, fireEvent } from "@testing-library/react";
import selectEvent from "react-select-event";
import Form from "./";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { act } from "react-dom/test-utils";

const newEmployee = {
	firstName: "Harry",
	lastName: "Potter",
	birthDate: "07.31.1980",
	startDate: "06.30.2023",
	street: "Nice street",
	city: "N.Y",
	state: "Alabama",
	zipCode: 10001,
	department: "Sales",
	id: 3,
};
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
describe("Component Form", () => {
	it("Should render with no crash", () => {
		render(
			<Provider store={store}>
				<Form employeesList={employeesList} />
			</Provider>,
			{ wrapper: BrowserRouter },
		);
	});
	it("Should, changes inputs and select on user's changes", async () => {
		const setup = () => {
			const utils = render(
				<Provider store={store}>
					<Form employeesList={employeesList} />
				</Provider>,
				{ wrapper: BrowserRouter },
			);
			const employeeForm = {
				firstName: screen.getByLabelText("firstName"),
				lastName: screen.getByLabelText("lastName"),
				birthDate: screen.getByLabelText("birthDateInput"),
				startDate: screen.getByLabelText("startDateInput"),
				street: screen.getByLabelText("street"),
				city: screen.getByLabelText("city"),
				state: screen.getByLabelText("State :"),
				zipCode: screen.getByLabelText("zipCode"),
				department: screen.getByLabelText("Department :"),
				id: 3,
			};

			return {
				employeeForm,
				...utils,
			};
		};

		const { employeeForm } = setup();
		fireEvent.change(employeeForm.firstName, { target: { value: newEmployee.firstName } });
		fireEvent.change(employeeForm.lastName, { target: { value: newEmployee.lastName } });
		fireEvent.change(employeeForm.birthDate, { target: { value: newEmployee.birthDate } });
		fireEvent.change(employeeForm.startDate, { target: { value: newEmployee.startDate } });
		fireEvent.change(employeeForm.street, { target: { value: newEmployee.street } });
		fireEvent.change(employeeForm.city, { target: { value: newEmployee.city } });
		fireEvent.change(employeeForm.zipCode, { target: { value: newEmployee.zipCode } });
		await act(() => {
			selectEvent.select(employeeForm.state, newEmployee.state);
			selectEvent.select(employeeForm.department, newEmployee.department);
		});

		expect(
			screen.getByTestId("form", {
				name: /Add an employee/i,
			}),
		).toHaveFormValues({
			firstName: newEmployee.firstName,
			lastName: newEmployee.lastName,
			birthDateInput: newEmployee.birthDate,
			startDateInput: newEmployee.startDate,
			street: newEmployee.street,
			city: newEmployee.city,
			state: newEmployee.state,
			department: newEmployee.department,
			zipCode: newEmployee.zipCode,
		});
	});
	describe("The 'save' button is clicked", () => {
		it("Should show a modal if the form had been sended", () => {
			const mockSetIsModalOpen = jest.fn();
			render(
				<Provider store={store}>
					<Form setIsModalOpen={mockSetIsModalOpen} employeesList={employeesList} />
				</Provider>,
				{ wrapper: BrowserRouter },
			);
			fireEvent.click(screen.getByText(/Save/i));
			expect(mockSetIsModalOpen).toBeCalledWith(true);
		});

		it("Shouldn't send the form if an input is empty", () => {
			const mockSetIsModalOpen = jest.fn();
			render(
				<Provider store={store}>
					<Form setIsModalOpen={mockSetIsModalOpen} employeesList={employeesList} />
				</Provider>,
				{ wrapper: BrowserRouter },
			);
			fireEvent.click(screen.getByText(/Save/i));
		});
	});
});
