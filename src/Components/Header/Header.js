import {NavLink} from "react-router-dom";
import React from "react";

const Header = (props) => {
    return (

    <header className="header">
        <img src="/logo_sber.jpeg"/>

        <div className="loginBlock">
            {props.isAuth
                ? props.login
                : <NavLink to={"/login"}> Login </NavLink>
            }
        </div>
    </header>
    )
}

export default Header