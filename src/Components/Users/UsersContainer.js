import React from "react";
import {connect} from "react-redux";
import {
    displayPreloaderAC,
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/UsersReducer";
import Users from "./Users";
import {UsersAPI} from "../../API/API";


class UsersAPIContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.displayPreloader(true);

        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)

            .then(data => {
                this.props.displayPreloader(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            });


    };

    onPageChanged = (page) => {
        this.props.displayPreloader(true);
        this.props.setCurrentPage(page);


        UsersAPI.getUsersOnCurrentPage(page, this.props.pageSize).then(data => {
            this.props.displayPreloader(false);
            this.props.setUsers(data.items)
        })

    };

    render() {
        return (

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   users={this.props.users}
                   isDisplay={this.props.isDisplay}
            />)
    };

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isDisplay: state.usersPage.isDisplay
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        follow: (userId) => {
            dispatch(followAC(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        displayPreloader: (isDisplay) => {
            dispatch(displayPreloaderAC(isDisplay))
        },
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
export default UsersContainer