import React from "react";
import ReactPaginate from "react-paginate";

interface PageProps {
  pageCount: number;
  onPageChange: (selectedPage: { selected: number }) => void;
}

const Pagination = ({ pageCount, onPageChange }: PageProps) => {
  return (
    <div className="py-10 flex justify-center">
      <ReactPaginate
        breakLabel="·"
        nextLabel="next →"
        onPageChange={onPageChange}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="← prev"
        containerClassName="flex items-center gap-1 font-mono-custom text-xs tracking-widest"
        pageLinkClassName="w-8 h-8 flex items-center justify-center rounded transition-colors duration-150 text-[#4a3a28] hover:text-[#c9933a]"
        activeClassName="[&>a]:text-[#c9933a] [&>a]:bg-[#1e1810]"
        previousClassName="px-3 py-1 text-[#4a3a28] hover:text-[#c9933a] transition-colors duration-150"
        nextClassName="px-3 py-1 text-[#4a3a28] hover:text-[#c9933a] transition-colors duration-150"
        disabledClassName="opacity-20 cursor-not-allowed"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
