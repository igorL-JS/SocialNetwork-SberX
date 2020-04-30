import p from "./Users.module.css";
import React from "react";
import preloader from "../../img/preloader.gif";
import Preloader from "./Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize));

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={p.content}>

            <img src="/shapka.jpg" width="1000" heigth="40"/>

            <div>
                {pages.map((page) => {
                    return <span onClick={() => {
                        props.onPageChanged(page)
                    }} className={props.currentPage === page && p.selected}> {page} </span>
                })}

                {props.isDisplay ? <Preloader/> : null}

                {props.users.map((u) => {
                        return (
                            <div>
            <span>

                <div className={p.avatar}>
                    <NavLink to= {"/profile/" + u.id}>
                        <img src={(u.photos.small != null) ? (u.photos.small) : ("/avatar_1.jpg")}/>
                    </NavLink>
                    </div>

                <div>
                    {u.followed

                        ? <input type="submit" onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "c889db6b-34d0-4944-9db4-0a9e80ebd04e"
                                    }
                                }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                            })
                        }} value="Follow"/>

                        : <input type="submit" onClick={() => {
                            debugger;
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "c889db6b-34d0-4944-9db4-0a9e80ebd04e"
                                    }
                                }).then(response => {
                                    debugger;
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                            })
                        }} value="Unfollow"/>
                    }

                </div>
            </span>

                                <span>

                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>

                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>

            </span>
                                <hr align="left" width="95%"/>
                            </div>
                        )
                    }
                )
                }
            </div>
        </div>
    )


};
export default Users;