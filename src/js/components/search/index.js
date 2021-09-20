import "./css/search.css";
import SearchLogic from "./logic/searchLogic";
const Search = () => {
  const { searchTxt, setSearchTxt, search } = SearchLogic();

  return (
    <>
      <div className="search-bar">
        <input
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          className="search-text"
          placeholder="Search..."
          name="search-input"
        />
        <button
          className="search-button"
          data-testid="search-button"
          onClick={search}
        >
          Search
        </button>
      </div>
    </>
  );
};
export default Search;
