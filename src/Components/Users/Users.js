import p from "./Users.module.css";
import React from "react";
import preloader from "../../img/preloader.gif";
import Preloader from "./Preloader";

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
                    <img src={(u.photos.small != null) ? (u.photos.small) : ("/avatar_1.jpg")}/>
                </div>

                <div>
                    {u.followed
                        ? <input type="submit" onClick={() => {
                            props.unfollow(u.id)
                        }} value="Follow"/>
                        : <input type="submit" onClick={() => {
                            props.follow(u.id)
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