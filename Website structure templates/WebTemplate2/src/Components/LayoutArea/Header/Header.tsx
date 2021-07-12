import React from "react";
import Menu from "../Menu/Menu";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <Menu/>
            <p className="fixTitle">Website Logo</p>           
        </div>
    );
}

export default Header;
