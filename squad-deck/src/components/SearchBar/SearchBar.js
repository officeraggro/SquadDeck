import { useContext, useState } from "react";
import SearchContext from "../SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data, searchData, setSearchData } = useContext(SearchContext);

    
    
    const handleSearch = () => {
      const searchTermLower = searchTerm.toLowerCase();
      const searchResults = data.alpha_roster.filter((item) =>
          Object.values(item).some(
              (val) => typeof val === "string" && val.toLowerCase().includes(searchTermLower)
          )
      );
      setSearchData(searchResults);
      setSearchTerm(""); // Reset search term
    };
    
    
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         e.preventDefault()
          handleSearch();
          setSearchTerm("");
      }
    }

  return (
    <div>
                <form className="searchbar">
          <input
            type="search"
            className="searchInput"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
          /><FontAwesomeIcon className="searchIcon" onClick={handleSearch} icon={faMagnifyingGlass} />
        </form>
    </div>
  )
}

export default SearchBar

