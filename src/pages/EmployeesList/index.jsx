import React, { useMemo, useEffect, useState } from "react";
import "./style.css";
import { useTable, useSortBy, useFilters, useGlobalFilter, usePagination } from "react-table";
import { columnsInfos } from "../../utils/const";
import GlobalFilter from "../../components/GlobalFilter";
import PagesToShow from "../../components/PagesToShow";
import Pagination from "../../components/Pagination";
import Table from "../../components/Table";
import { Link } from "react-router-dom";

function EmployeesList({ employeesList }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		if (employeesList) {
			setData(employeesList);
		}
	}, [employeesList]);

	const columns = useMemo(() => columnsInfos, []);
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
			<div id="alert"> Please view this page in landscape mode.</div>
			<div id="table">
				<div className="sorteWrapper">
					<PagesToShow pageSize={pageSize} setPageSize={setPageSize} />
					<GlobalFilter
						preGlobalFilteredRows={preGlobalFilteredRows}
						globalFilter={state.globalFilter}
						setGlobalFilter={setGlobalFilter}
					/>
				</div>

				<Table
					getTableProps={getTableProps}
					getTableBodyProps={getTableBodyProps}
					headerGroups={headerGroups}
					prepareRow={prepareRow}
					page={page}
				/>

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
		</div>
	);
}

export default EmployeesList;
