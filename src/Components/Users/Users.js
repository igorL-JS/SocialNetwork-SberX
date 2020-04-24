import React from "react";
import p from "./Users.module.css";
import usersReducer from "../../redux/UsersReducer";
import * as axios from "axios";


class Users extends React.Component {
        constructor(props) {
            super(props);
        }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })

    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    };

    render() {
        let pagesCount= Math.ceil((this.props.totalUsersCount / this.props.pageSize));

        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }






        let UsersElement = this.props.users.map((u) => {
                return (
                    <div>
            <span>

                <div className={p.avatar}>
                    <img src={(u.photos.small != null) ? (u.photos.small) : ("/avatar_1.jpg")}/>
                </div>

                <div>
                    {u.followed
                        ? <input type="submit" onClick={() => {
                            this.props.unfollow(u.id)
                        }} value="Follow"/>
                        : <input type="submit" onClick={() => {
                            this.props.follow(u.id)
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
                        <hr align="left" width = "95%"/>
                    </div>
                )
            }
        );


        return (
            <div className={p.content}>

                <img src="/shapka.jpg" width="1000" heigth="40"/>
                <div>
                    {pages.map( (page) => {
                        return <span onClick={(e) => {this.onPageChanged(page)}} className={this.props.currentPage === page && p.selected}> {page} </span>})}
                    {UsersElement}
                </div>
            </div>
        )


    }

}

export default Users;