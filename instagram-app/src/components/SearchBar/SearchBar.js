import React from 'react';

import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='searchbar-container'>
            <div className='searchbar-title'><i class="fab fa-instagram"></i> | <span className='searchbar-titletext'>Instagram</span></div>
            <div className='searchbar-input'> search</div>
            <div className='searchbar-nav'>
            <i class="far fa-compass"></i> &nbsp;&nbsp;&nbsp; <i class="far fa-heart"></i> &nbsp;&nbsp;&nbsp; <i class="far fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar;