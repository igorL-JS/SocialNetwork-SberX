import p from "./Users.module.css";
import React from "react";
import Preloader from "./Preloader";
import {NavLink} from "react-router-dom";
import {Paginator} from "./Paginator";



const Users = (props) => {

    return (
        <div className={p.content}>

            <img src="/shapka.jpg" width="1000"/>

            <div>

              <Paginator className={p.content} sizeOfPart={props.sizeOfPart} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                           currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>

                {props.isDisplay ? <Preloader/> : null}

                {props.users.map((u) => {

                        return (
                            <div>
            <span>

                <div className={p.avatar}>
                    <NavLink to={"/profile/" + u.id}>

                        <img src={(u.photos.small != null) ? (u.photos.small) : ("/avatar_1.jpg")}/>
                    </NavLink>
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
                    <div>{u.name}</div>
                    <div>{u.status}</div>
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