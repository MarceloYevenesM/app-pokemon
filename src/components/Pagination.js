import React from "react";

export const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item">
            <a
              href="!#"
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
    </nav>
  );
};
