import React from 'react';

import { HeaderContainer, Title, TitleText, SearchContainer, SearchInput, HeaderNav } from '../../styles/SearchBar/SearchBar'

const SearchBar = (props) => {
    return (
        <HeaderContainer>
            <Title><i className="fab fa-instagram"></i> | <TitleText>Instagram</TitleText></Title>
            <SearchContainer>
                <SearchInput type='search' placeholder='search' onKeyDown={props.search} />
            </SearchContainer>
            <HeaderNav>
                <i className="far fa-compass"></i> &nbsp;&nbsp;&nbsp; <i className="far fa-heart"></i> &nbsp;&nbsp;&nbsp; <i className="far fa-user"></i>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default SearchBar;