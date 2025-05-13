import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      <button disabled={currentPage === 1} onClick={() => setPage(1)}>
        «
      </button>
      <button
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
      >
        ‹
      </button>

      {pages.length > 5 && currentPage > 3 && <span>...</span>}

      {pages
        .slice(
          currentPage > 3 ? currentPage - 3 : 0,
          currentPage + 2 > totalPages ? totalPages : currentPage + 2
        )
        .map(page => (
          <button
            key={page}
            className={currentPage === page ? styles.active : ''}
            onClick={() => setPage(page)}
          >
            {page}
          </button>
        ))}

      {pages.length > 5 && currentPage < totalPages - 2 && <span>...</span>}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setPage(currentPage + 1)}
      >
        ›
      </button>
      <button
        disabled={currentPage === totalPages}
        onClick={() => setPage(totalPages)}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
