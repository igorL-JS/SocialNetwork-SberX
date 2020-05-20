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
                        <span>
                        <input className="btn" type="submit" value="Log out" onClick={props.logout}/>
                    </span>

                </div>

                : <NavLink to={"/login"}> Login </NavLink>
            }
        </div>
    </header>
    )
};

export default Header