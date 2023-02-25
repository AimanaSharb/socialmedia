import React from 'react';
import {BiSearch} from "react-icons/bi"


const HeaderSearch = () => {
    return (
        <label htmlFor="" className="header__search">
                            <span className="header__search-icon">
                                       <BiSearch style={{'color':'rgba(0, 1, 45, 0.96)'}} size="23px"/>
                            </span>
            <input className="header__search-field" type="text" placeholder="Search"/>


        </label>
    );
};

export default HeaderSearch;