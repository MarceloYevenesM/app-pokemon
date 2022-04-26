import React from "react";
import "../styles/pagination.css";

export const Pagination = ({
  pokemonsPerPage,
  totalPokemons,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPokemons / pokemonsPerPage) + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="d-flex row justify-content-center align-items-center">
        <div className="col-auto text-center">
          <ul className="pagination flex-wrap">
            {pageNumbers.map((number, i) => (
              <li className="page-item" key={i}>
                <button
                  className="page-link"
                  onClick={() => {
                    setCurrentPage(number);
                  }}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
