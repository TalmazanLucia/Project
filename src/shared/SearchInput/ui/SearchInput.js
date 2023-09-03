import React from 'react';
import './SearchInput.scss';

const SearchInput = ({placeholder}) => {

    return (
        <input className='input-wrapper' placeholder={placeholder}/>
    )
}

export default SearchInput;