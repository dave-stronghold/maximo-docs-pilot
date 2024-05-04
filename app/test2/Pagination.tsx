import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 mt-3 w-full">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className={`relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <input
        type="number"
        min="1"
        max={totalPages}
        value={currentPage}
        onChange={(e) => onPageChange(parseInt(e.target.value))}
        className="relative inline-flex items-center px-2 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-offset-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className={`relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Pagination;
