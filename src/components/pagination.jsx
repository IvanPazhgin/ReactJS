import React from "react";
import _ from "lodash"

const Pagination = ({itemsCount, pageSize, currentPage, onPageChange}) => {
  const pageCount = Math.ceil(itemsCount / pageSize) // 3
  // console.log({ pageCount }); // 3
  if (pageCount === 1) return null

  // создаем массив страниц
  // в метод range(), мы передаём pageCount + 1 (так как в данном методе второй параметр не включается в массив)
  const pages = _.range(1, pageCount + 1); // [1, 2, 3]

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page =>
          <li
            key={page}
            className={"page-item" + (currentPage === page ? ' active' : '')}
          >
            {/* Поменяли на кнопку, чтобы не было ошибок */}
            <a
              className="page-link"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
          )}

      </ul>
    </nav>
  )
};

export default Pagination;