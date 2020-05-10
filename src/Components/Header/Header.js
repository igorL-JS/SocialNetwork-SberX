import {NavLink, Redirect} from "react-router-dom";
import React from "react";

const Header = (props) => {
    return (

    <header className="header">
        <img src="/logo_sber.jpeg"/>

        <div className="loginBlock">
            {props.isAuth
                ? <div>
                    {props.login}
                    <input type="button" value="Log out" onClick={props.logout}/>

                </div>

                : <NavLink to={"/login"}> Login </NavLink>
            }
        </div>
    </header>
    )
};

export default Header