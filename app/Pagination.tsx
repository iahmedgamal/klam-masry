// src/components/Pagination.js
import React from 'react';
import ReactPaginate from 'react-paginate';
 

interface PageProps {
  pageCount: number;
  onPageChange: any;
}
const Pagination = ({ pageCount, onPageChange } : PageProps) => {
  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={onPageChange}
    pageRangeDisplayed={5}
    pageCount={pageCount}
    previousLabel="< previous"
    renderOnZeroPageCount={null}
  />
  );
};

export default Pagination;
