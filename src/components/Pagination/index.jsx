import React from "react";

function Pagination({
	gotoPage,
	previousPage,
	nextPage,
	canPreviousPage,
	canNextPage,
	pageCount,
	pageIndex,
	pageOptions,
}) {
	return (
		<div className="pagination">
			<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
				{"<<"}
			</button>
			<button onClick={() => previousPage()} disabled={!canPreviousPage}>
				{"<"}
			</button>
			<button onClick={() => nextPage()} disabled={!canNextPage}>
				{">"}
			</button>
			<button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
				{">>"}
			</button>
			<span>
				Page
				<strong>
					{pageIndex + 1} of {pageOptions.length}
				</strong>
			</span>
		</div>
	);
}

export default Pagination;
