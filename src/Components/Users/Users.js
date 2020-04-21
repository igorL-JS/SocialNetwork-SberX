import React from "react";
import p from "./Users.module.css";
import usersReducer from "../../redux/UsersReducer";



let Users = (props) => {
    let UsersElement = props.users.map((u) =>{
        return (
        <div >
            <span>

                <div className={p.avatar}>
                    <img src="/avatar_1.jpg"/>
                </div>

                <div>
                    {u.followed
                        ? <input type="submit" onClick= {() => {props.unfollow(u.id)}} value = "Follow"/>
                        : <input type="submit" onClick= {() => {props.follow(u.id)}} value = "Unfollow"/>
                    }
                </div>
            </span>

            <span>

                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>

                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>

            </span>
        </div>)}
    );


    return (
    <div className={p.content}>
        <img src="/shapka.jpg" width="1000" heigth="40"/>
        <div>
            {UsersElement}
        </div>
    </div>
    )
};


export default Users;