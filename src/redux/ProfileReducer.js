import {ProfileAPI} from "../API/API";

const ADD_POSTS = "Add-Posts";
const UP_DATE_LIKE = "Up-date-like";
const SET_USER_PROFILE = "Set-user-profile";
const GET_STATUS = "Get-status";
const DELETE_POST = "Delete-Post ";

let initialState = {
    Posts: [
        {id: 0, liked: false, messages: "Hi, everyone! I use SberX", likecount: 30},
        {id: 1, liked: false, messages: "Hi, that's my first post", likecount: 24},
    ],
    newPostText: " ",
    profile: null,
    status: " "
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case DELETE_POST:
            return {
                ...state, Posts: state.Posts.filter( p => p.id !== action.id)
            };

        case ADD_POSTS:
            return {
                ...state,
                Posts: [...state.Posts, {id: state.Posts.length++ , liked: false, messages: action.newText, likecount: 0}]
            };

        case UP_DATE_LIKE:
            return {
                ...state,
                Posts: state.Posts.map((p) => {
                    if (p.id === action.postId) {
                        if (p.liked === false) {
                            return {...p, liked: true, likecount: p.likecount + 1}
                        } else {
                            return {...p, liked: false, likecount: p.likecount - 1}
                        }
                    }
                    return {...p}
                })
            };
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile};
        case GET_STATUS:
            return {... state, status: action.status};
        default :
            return state;
    }
};


// Функции  формируют объекты (action) для передачи в store через метод dispatch


export const addPostsActionCreator = (text) => {
    return {
        type: ADD_POSTS,
        newText: text
    }
};
export const deletePostAC = (id)=>{
    return{
        type: DELETE_POST,
        id: id
    }
};

export const upDateLikeAC = (postId) => {
    return {type: UP_DATE_LIKE, postId}
};

export const setUserProfileAC = (profile) => {
    return {type: SET_USER_PROFILE, profile}
};

export const getStatusAC = (status) => {
    return {type: GET_STATUS, status}
};

export const getPageProfile = (userID) => {
    return async dispatch => {
        let response = await ProfileAPI.getPageProfile(userID);
            dispatch(setUserProfileAC(response))

    }
};

export const getStatusThunk = (userID) => {
    return async dispatch => {
        let response = await ProfileAPI.getStatus(userID);
        dispatch(getStatusAC(response))

    }
};

export const upDateStatusThunk = (status) => {
    return  async dispatch => {
        let response = await ProfileAPI.upDateStatus(status);
            if (response.resultCode === 0)
            dispatch(getStatusAC(status))
    }
};


export default profileReducer;