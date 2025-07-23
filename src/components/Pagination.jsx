import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination flex items-center cursor-pointer" dir="ltr">
      <button 
        id="prevPage" 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 0}
        className="hover:text-emerald-600 px-4 font-dana"
      >
        Anterior
      </button>

      <div className="num_btn flex flex-row items-center cursor-pointer">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`num__btn font-dana px-4 ${
              currentPage === index ? 'num__btn--active text-emerald-700' : 'hover:text-emerald-600'
            }`}
            onClick={() => onPageChange(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button 
        id="nextPage" 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages - 1}
        className="hover:text-emerald-600 px-4 font-dana"
      >
        Siguiente
      </button>

      {/* Indicador activo, opcional */}
      <div className="active__indicator" style={{ transform: `translateX(${currentPage * 4}rem)` }}></div>
    </div>
  );
};

export default Pagination;
