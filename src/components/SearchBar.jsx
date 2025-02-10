// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
 
function SearchBar({ keyword, keywordChange }){
    console.log("keywordChange:", keywordChange);
    return (
        <input
        className="search-bar"
        type="text"
        placeholder="Cari catatan..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)} />
    )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar;