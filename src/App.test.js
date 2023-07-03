import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

describe("Component App", () => {
	it("Should render with no crash", () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>,
			{ wrapper: BrowserRouter },
		);
	});
});
