import { render, screen, fireEvent } from "@testing-library/react";
import CreateEmployee from "./";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../app/store";

describe("Component CreateEmployee", () => {
	it("Should render with no crash", () => {
		render(
			<Provider store={store}>
				<CreateEmployee />
			</Provider>,
			{ wrapper: BrowserRouter },
		);
	});
	describe("On click the 'View Current Employees' page link", () => {
		it("Should landing on the right page", () => {
			render(
				<Provider store={store}>
					<CreateEmployee />
				</Provider>,
				{ wrapper: BrowserRouter },
			);
			fireEvent.click(screen.getByText(/View Current Employees/i));
			expect(screen.getByText(/Current Employees/i)).toBeInTheDocument();
		});
	});
});
