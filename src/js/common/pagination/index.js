import { useState, useEffect } from "react";
import "./css/style.css";
const Pagination = ({ data, RenderComponent, limit }) => {
  const [allData, setAllData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageData, setPageData] = useState([]);
  const [pageGroup, setPageGroup] = useState([]);
  const nextPage = () => {
    setCurrentPage((page) => page + 1);
  };
  const prevPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const getPageData = () => {
    const start = currentPage * limit - limit;
    const end = start + limit;
    setPageData(allData.slice(start, end));
  };
  const getPageGroup = () => {
    const pages = Math.ceil(allData.length / limit);
    setPageGroup(new Array(pages).fill().map((_, i) => i + 1));
  };
  const changePage = (ele) => {
    setCurrentPage(ele);
  };
  useEffect(() => {
    getPageData();
    getPageGroup();
    console.log("Pagination", pageData);
  }, [allData, currentPage]);
  useEffect(() => {
    if (allData.length !== data.length) {
      setCurrentPage(1);
    }
    setAllData(JSON.parse(JSON.stringify(data)));
  }, [data]);
  return (
    <>
      <div className="rows">
        {allData.length > 0 && pageData.length > 0
          ? pageData.map((d, i) => {
              return <RenderComponent item={d} key={d.id} index={i} />;
            })
          : "No Data "}
      </div>
      {allData.length > limit ? (
        <div className="pagination">
          <button
            data-testid="prev-btn"
            className="pagination-btn"
            disabled={currentPage === 1 ? true : false}
            onClick={prevPage}
          >
            Prev
          </button>
          {pageGroup.map((ele) => {
            if (ele === currentPage) {
              return (
                <span key={ele} className="current-page">
                  {ele}
                </span>
              );
            } else {
              return (
                <button
                  className="pagination-btn"
                  key={ele}
                  value={ele}
                  onClick={(e) => changePage(ele)}
                >
                  {ele}
                </button>
              );
            }
          })}

          <button
            className="pagination-btn"
            data-testid="next-btn"
            disabled={currentPage * limit >= allData.length ? true : false}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Pagination;
