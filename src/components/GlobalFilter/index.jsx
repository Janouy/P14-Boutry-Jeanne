import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
	const count = preGlobalFilteredRows.length;
	const [value, setValue] = useState(globalFilter);
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 200);

	return (
		<span>
			Search:{" "}
			<input
				value={value || ""}
				onChange={(e) => {
					setValue(e.target.value);
					onChange(e.target.value);
				}}
				placeholder={`${count} employees...`}
				style={{
					fontSize: "0.8rem",
					border: "1",
					marginBottom: "10px",
				}}
			/>
		</span>
	);
}

export default GlobalFilter;
