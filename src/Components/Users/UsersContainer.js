import React from "react";
import {connect} from "react-redux";
import {
    followThunkCreator, getUsersThunkCreator, onPageChangedThunkCreator,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowThunkCreator
} from "../../redux/UsersReducer";
import Users from "./Users";



class UsersAPIContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setUsers(this.props.currentPage, this.props.pageSize)
        /*this.props.displayPreloader(true);

        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)

            .then(data => {
                this.props.displayPreloader(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            });

*/
    };

    onPageChanged = (page) => {
        this.props.onPageChangedThunk(page, this.props.pageSize)
        /*this.props.displayPreloader(true);
        this.props.setCurrentPage(page);


        UsersAPI.getUsersOnCurrentPage(page, this.props.pageSize).then(data => {
            this.props.displayPreloader(false);
            this.props.setUsers(data.items)
        })
*/
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
        isDisplay: state.usersPage.isDisplay,

    }
};

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