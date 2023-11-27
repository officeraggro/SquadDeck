import { useContext, useState, useEffect, useRef } from "react";
import SearchContext from "../SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const { data, setData, searchTerm, setSearchTerm, searchData, setSearchData } =
    useContext(SearchContext);
  const isMounted = useRef(false);

  const handleSearch = () => {
    localStorage.setItem('searchTerm', JSON.stringify(searchTerm))
    const searchTermLower = searchTerm.toLowerCase();
    const searchResults = data.alpha_roster.filter((item) =>
      Object.values(item).some(
        (val) =>
          typeof val === "string" && val.toLowerCase().includes(searchTermLower)
      )
    );
    setSearchData(searchResults);
    setSearchTerm(""); // Reset search term
  };

  const handleSearchWithUpdate = () => {
    const search = JSON.parse(localStorage.getItem('searchTerm'))
    const searchTermLower = search.toLowerCase();
    const searchResults = data.alpha_roster.filter((item) =>
      Object.values(item).some(
        (val) =>
          typeof val === "string" && val.toLowerCase().includes(searchTermLower)
      )
    );
    setSearchData(searchResults);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
      setSearchTerm("");
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      handleSearchWithUpdate();
    } else {
      isMounted.current = true;
    }
  }, [data]);

  return (
    <div>
      <form className="searchbar">
        <input
          type="search"
          className="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <FontAwesomeIcon
          className="searchIcon"
          onClick={handleSearch}
          icon={faMagnifyingGlass}
        />
      </form>
    </div>
  );
};

export default SearchBar;
