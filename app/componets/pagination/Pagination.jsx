import React, { useState, useEffect } from 'react';

const Pagination = ({ total, perPage, onPageChange }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    onPageChange(page);
  }, [page]);

  const lastPage = Math.ceil(total / perPage);

  return (
    <div className="flex justify-center mt-12 p-2 px-5 space-x-2 
    bg-white w-fit mx-auto shadow-shadow-dark">
      {page > 1 && (
        <button onClick={() => setPage(page - 1)} className="px-3 py-1 border rounded ">
          Previous
        </button>
      )}

      {[...Array(lastPage)].map((_, i) => (
        <button
          key={i + 1}
          onClick={() => setPage(i + 1)}
          className={`px-3 py-1 border rounded ${i + 1 === page ? 'bg-secondary text-white' : ''}`}
        >
          {i + 1}
        </button>
      ))}

      {page < lastPage && (
        <button onClick={() => setPage(page + 1)} className="px-3 py-1 border rounded">
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
