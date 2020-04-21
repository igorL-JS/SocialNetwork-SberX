const UP_DATE_NEW_POST_TEXT = "Up-Date-New-Post-Text";
const ADD_POSTS = "Add-Posts";
const UP_DATE_LIKE = "Up-date-like";


let initialState = {
    Posts: [
        {id: 0, liked: false, messages: "Hi, everyone! I use SberX", likecount: 30},
        {id: 1, liked: false, messages: "Hi, that's my first post", likecount: 24},
    ],
    newPostText: "What's new ?",
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POSTS:
            return {
                ...state,
                Posts: [...state.Posts, {id: state.Posts.length++ , liked: false, messages: state.newPostText, likecount: 0}]
            };

        case UP_DATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};

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
        default :
            return state;
    }
};


// Функции  формируют объекты (action) для передачи в store через метод dispatch

export const upDateNewPostTextActionCreator = (text) => {
    return {
        type: UP_DATE_NEW_POST_TEXT,
        newText: text
    }
};

export const addPostsActionCreator = () => {
    return {type: ADD_POSTS}
};

export const upDateLikeAC = (postId) => {
    return {type: UP_DATE_LIKE, postId}
};

export default profileReducer;