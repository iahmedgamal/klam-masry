import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.css'; 

interface PageProps {
  pageCount: number;
  onPageChange: (selectedPage: { selected: number }) => void;

}
const Pagination = ({ pageCount, onPageChange } : PageProps) => {
  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="Next"
    onPageChange={onPageChange}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel="Back"
    containerClassName={styles.pagination}
    renderOnZeroPageCount={null}
  />
  );
};

export default Pagination;
