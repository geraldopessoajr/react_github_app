import React from "react";
import PropTypes from "prop-types";

const Search = ({ handleSearch, isDisabled }) =>  (
    <div className='search'>
        <input
            type='search'
            placeholder='Digite o nome do usuário no Github'
            disabled={isDisabled}
            onKeyUp={handleSearch}
        />
    </div>   
)

Search.prototypes = {
    handleSearch: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

export default Search;