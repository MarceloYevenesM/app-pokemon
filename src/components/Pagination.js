import React from "react";

export const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage) + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="d-flex row justify-content-center align-items-center">
        <div className="col-auto text-center">
          <ul className="pagination flex-wrap">
            {pageNumbers.map((number) => (
              <li className="page-item">
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
