import React from 'react';
import ReactPaginate from 'react-paginate';

interface PageProps {
  pageCount: number;
  onPageChange: (selectedPage: { selected: number }) => void;
}

const Pagination = ({ pageCount, onPageChange }: PageProps) => {
  return (
    <div className="overflow-x-auto max-w-full py-2 pt-12">
      <div className="inline-flex"> 
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={onPageChange}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="Back"
          containerClassName="flex space-x-2 text-cyan-500"
          pageLinkClassName="px-4 py-2 border border-cyan-400 rounded hover:bg-cyan-200"
          activeClassName="border-b-2 border-cyan-500 text-cyan-900"
          previousClassName="px-4 py-2 border border-cyan-300 rounded hover:bg-cyan-200"
          nextClassName="px-4 py-2 border border-cyan-300 rounded hover:bg-cyan-200"
          disabledClassName="opacity-50 cursor-not-allowed"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Pagination;
