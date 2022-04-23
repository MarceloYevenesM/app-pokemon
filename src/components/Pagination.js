import React from "react";

export const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="d-flex row justify-content-center align-items-center">
        <div className="col-auto text-center">
          <ul className="pagination flex-wrap">
            {pageNumbers.map((number) => (
              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() => {
                    setCurrentPage(number);
                  }}
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
