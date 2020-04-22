import React from "react";
import p from "./Users.module.css";
import usersReducer from "../../redux/UsersReducer";
import * as axios from "axios";



let Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            props.setUsers(response.data.items) })
    }
        /*([
            {
                id: 1,
                followed: true,
                name: "Vasiliy",
                status: "Catch me if you can ...",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 2,
                followed: false,
                name: "Anton",
                status: "Catch me if you can ...",
                location: {city: "Saint-Petersburg", country: "Russia"}
            },
            {
                id: 3,
                followed: true,
                name: "Andrey",
                status: "Catch me if you can ...",
                location: {city: "Kiev", country: "Ukraine"}
            },
        ],)
    }*/
    let UsersElement = props.users.map((u) =>{
        return (
        <div >
            <span>

                <div className={p.avatar}>
                    <img src={(u.photos.small != null) ? (u.photos.small) : ("/avatar_1.jpg")}/>
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
                    <div>{u.fullname}</div>
                    <div>{u.status}</div>
                </span>

                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
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