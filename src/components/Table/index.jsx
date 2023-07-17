import React from "react";

function Table({ getTableProps, getTableBodyProps, headerGroups, prepareRow, page }) {
	return (
		<table {...getTableProps()} style={{ border: "solid 1px #6e8510", marginBottom: "2vh" }}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th
								{...column.getHeaderProps(column.getSortByToggleProps())}
								style={{
									borderBottom: "solid 3px #6e8510",
									background: "#d8dbd4",
									color: "black",
									fontWeight: "bold",
									width: "100px",
								}}
							>
								{column.render("Header")}
								<span>{column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}</span>
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{page.map((row, i) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return (
									<td
										{...cell.getCellProps()}
										style={{
											padding: "10px",
											border: "solid 1px gray",
											background: "#eff4ef",
										}}
									>
										{cell.render("Cell")}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default Table;
