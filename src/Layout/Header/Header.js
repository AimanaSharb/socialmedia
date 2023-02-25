import React from 'react';
import HeaderSearch from "./HeaderSearch";
import {MdNotifications} from "react-icons/md"}
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__left">
                        <h1 className="header__title">Facebook</h1>
                        <HeaderSearch/>



                    </div>
                    <div className="header__right">
                        <span className="header__notif">{<MdNotifications style={{"color":'white'}} size="23px"/>}</span>
                        <span classNamw="header__user">
                            <img src={nouserImage} alt=""/>
                        </span>



                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;