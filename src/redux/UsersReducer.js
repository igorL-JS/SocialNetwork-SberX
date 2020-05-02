import {UsersAPI} from "../API/API";

const UNFOLLOW = "Unfollow";
const FOLLOW = "Follow";
const SET_USERS = "Set-UsersAPIContainer";
const SET_CURRENT_PAGE = "Set-Current-Page";
const SET_TOTAL_USERS_COUNT = "Set-total-users-count";
const DISPLAY_PRELOADER = "Display-Preloader";
const BUTTON_DISABLED = "Button-disabled";

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 20,
    currentPage: 1,
    isDisplay:false,
    isDisabled:false
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        }

        case SET_USERS: {
            return {...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT : {
            return {... state, totalUsersCount: action.totalUsersCount}
        }
        case DISPLAY_PRELOADER: {
            return {...state, isDisplay: action.isDisplay}
        }
        case BUTTON_DISABLED: {
            return{...state, isDisabled: action.isDisabled
                }
        }

        default :
            return state
    }
};

export const followAC = (userId) => {
    return {type: FOLLOW, userId}
};

export const unfollowAC = (userId) => {
    return {type: UNFOLLOW, userId}
};

export const setUsersAC = (users) => {
    return {type: SET_USERS, users}
};

export const setCurrentPageAC = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
};

export const setTotalUsersCountAC = (totalUsersCount) => {
    return{type: SET_TOTAL_USERS_COUNT, totalUsersCount}
};
export const displayPreloaderAC = (isDisplay) => {
    return{type: DISPLAY_PRELOADER, isDisplay}
};
export const buttonDisabledAC = (isDisabled,userId) => {
    return{type: BUTTON_DISABLED, isDisabled,userId}
};


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(displayPreloaderAC(true));
        UsersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(displayPreloaderAC(false));
                dispatch(setUsersAC(data.items));
                dispatch(setTotalUsersCountAC(data.totalCount))
            })
    }
};

export const onPageChangedThunkCreator = (page,pageSize) => {
    return dispatch => {
        dispatch(displayPreloaderAC(true));
        dispatch(setCurrentPageAC(page));
        UsersAPI.getUsersOnCurrentPage(page, pageSize).then(data => {
            dispatch(displayPreloaderAC(false));
            dispatch(setUsersAC(data.items))
        })
    }

};

export const unfollowThunkCreator = (userID) => {
    return dispatch => {
        UsersAPI.deleteFollow(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(userID))
            }
        })
    }
};

export const followThunkCreator = (userID) => {
    return dispatch => {
        UsersAPI.postFollow(userID).then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(userID))
            }
        })
    }

};



export default usersReducer;
