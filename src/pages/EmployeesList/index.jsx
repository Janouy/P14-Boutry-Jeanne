import React, { useMemo, useEffect, useState } from "react";
import "./style.css";
import { getEmployeesList } from "../../selectors";
import { useSelector } from "react-redux";
import { useTable, useSortBy, useFilters, useGlobalFilter, usePagination } from "react-table";
import { columnsNames } from "../../utils/const";
import GlobalFilter from "../../components/GlobalFilter";
import PagesToShow from "../../components/PagesToShow";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";

function EmployeesList() {
	const employeesList = useSelector(getEmployeesList);

	const [data, setData] = useState([]);
	useEffect(() => {
		if (employeesList) {
			setData(employeesList);
		}
	}, [employeesList]);

	const columns = useMemo(() => columnsNames, []);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		state,
		preGlobalFilteredRows,
		setGlobalFilter,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{ columns, data, initialState: { pageIndex: 0 } },
		useFilters,
		useGlobalFilter,
		useSortBy,
		usePagination,
	);

	return (
		<div className="employeesList">
			<h1>Current Employees</h1>
			<Link className="homeLink" to="/">
				Create Employee
			</Link>
			<div className="sorteWrapper">
				<PagesToShow pageSize={pageSize} setPageSize={setPageSize} />
				<GlobalFilter
					preGlobalFilteredRows={preGlobalFilteredRows}
					globalFilter={state.globalFilter}
					setGlobalFilter={setGlobalFilter}
				/>
			</div>
			<table {...getTableProps()} style={{ border: "solid 1px #6e8510" }}>
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
			<Pagination
				gotoPage={gotoPage}
				previousPage={previousPage}
				nextPage={nextPage}
				canPreviousPage={canPreviousPage}
				canNextPage={canNextPage}
				pageCount={pageCount}
				pageIndex={pageIndex}
				pageOptions={pageOptions}
			/>
		</div>
	);
}

export default EmployeesList;
