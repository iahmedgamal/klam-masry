import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './page.module.css'; 

interface PageProps {
  pageCount: number;
  onPageChange: (selectedPage: { selected: number }) => void;

}
const Pagination = ({ pageCount, onPageChange } : PageProps) => {
  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={onPageChange}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel="< previous"
    containerClassName={styles.pagination}
    renderOnZeroPageCount={null}
  />
  );
};

export default Pagination;
