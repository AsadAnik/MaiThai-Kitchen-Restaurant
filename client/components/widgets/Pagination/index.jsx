import React from 'react';
import ReactJSPagination from 'react-js-pagination';

const Pagination = ({ currentPage, resultPerPage, totalResultsCount, handleCurrentPageNo }) => {
    return (
        <div className="pagination" aria-label="...">
            <ul className="pagination pagination-sm">
                <ReactJSPagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={totalResultsCount}
                    onChange={handleCurrentPageNo}
                    nextPageText="Next"
                    prevPageText="Prev"
                    firstPageText="1st"
                    lastPageText="Last"
                    itemClass="pageItem"
                    linkClass="pageLink"
                    activeClass="pageItemActive"
                    activeLinkClass="pageLinkActive"
                />
            </ul>
        </div>
    )
}

export default Pagination;