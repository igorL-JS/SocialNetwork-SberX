import React from "react";
import {connect} from "react-redux";
import {
    followThunkCreator, getUsersThunkCreator, onPageChangedThunkCreator,
    unfollowThunkCreator
} from "../../redux/UsersReducer";
import Users from "./Users";
import {
    getCurrentPage,
    getIsDisplay,
    getPageSize,
    getRequestUsers, getSizeOfPart,
    getTotalUsersCount
} from "../../redux/usersSelectors";



class UsersAPIContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setUsers(this.props.currentPage, this.props.pageSize)

    };

    onPageChanged = (page) => {
        this.props.onPageChangedThunk(page, this.props.pageSize)
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
                   sizeOfPart={this.props.sizeOfPart}


            />)
    };

}

const mapStateToProps = (state) => {
    return {
        users: getRequestUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize:getPageSize(state) ,
        currentPage: getCurrentPage(state) ,
        isDisplay: getIsDisplay(state),
        sizeOfPart: getSizeOfPart(state),
    }
};
// Используем селекторы - f(), которая принимает state и возвращает необходимую его часть.

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (currentPage,pageSize) => {
            dispatch(getUsersThunkCreator(currentPage,pageSize))
        },
        onPageChangedThunk: (page,pageSize) => {
            dispatch(onPageChangedThunkCreator(page,pageSize))
        },
        unfollow: (userID) => {
            dispatch(unfollowThunkCreator(userID))
        },
        follow: (userID) => {
            dispatch(followThunkCreator(userID))
        }


    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
export default UsersContainer