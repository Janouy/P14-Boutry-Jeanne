import { render, screen, fireEvent } from "@testing-library/react";
import "regenerator-runtime/runtime";
import EmployeesList from "./";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { columnsInfos } from "../../utils/const";

describe("Component EmployeesList", () => {
	it("Should render with no crash", () => {
		render(
			<Provider store={store}>
				<EmployeesList />
			</Provider>,
			{ wrapper: BrowserRouter },
		);
	});
	it("Should display all the employee's info columns", () => {
		render(
			<Provider store={store}>
				<EmployeesList />
			</Provider>,
			{ wrapper: BrowserRouter },
		);
		for (let columnsNameIt = 0; columnsNameIt < columnsInfos.length - 1; columnsNameIt++) {
			expect(screen.getByText(columnsInfos[columnsNameIt]["Header"])).toBeInTheDocument();
		}
	});
	describe("On click the 'create employee' page link", () => {
		it("Should landing on the right page", () => {
			render(
				<Provider store={store}>
					<EmployeesList />
				</Provider>,
				{ wrapper: BrowserRouter },
			);
			fireEvent.click(screen.getByText(/Create Employee/i));
			expect(screen.getByText(/Create Employee/i)).toBeInTheDocument();
		});
	});
});
