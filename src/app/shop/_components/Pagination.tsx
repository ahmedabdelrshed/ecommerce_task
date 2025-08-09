"use client";

import React, { useState } from "react";

const Pagination = () => {
  const totalPages = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`w-10 h-10 rounded-md text-sm font-medium transition
              ${
                currentPage === page
                  ? "bg-[#B88E2F] text-white"
                  : "bg-[#F9F1E7] text-black hover:bg-[#e8dbcc]"
              }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-16 h-10 rounded-md text-sm font-medium bg-[#F9F1E7] text-black hover:bg-[#e8dbcc] disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
