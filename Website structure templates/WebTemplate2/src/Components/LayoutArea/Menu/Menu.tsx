import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <nav>
                <button className="button" id="loginBtn"><NavLink to="login" exact>Login</NavLink></button>
                <button className="button"><NavLink to="comuunity" exact>btn2</NavLink></button>
                <button className="button"><NavLink to="interview" exact>btn1</NavLink></button>
                <button className="button"><NavLink to="home" exact>Home</NavLink></button>
                </nav>
        </div>
    );
}

export default Menu;