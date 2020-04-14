const UP_DATE_NEW_POST_TEXT = "Up-Date-New-Post-Text";
const ADD_POSTS = "Add-Posts";
const ADD_LIKE = "Add-Like";

let initialState = {
    Posts: [
        {id: 0, messages: "Hi, everyone! I use SberX", likecount: 30},
        {id: 1, messages: "Hi, that's my first post", likecount: 24},
    ],
    newPostText: "What's new ?",
};

const profileReducer = (state=initialState,action) => {
        switch (action.type) {
        case ADD_POSTS: {
            let newPostMessage = {
                id: 3,
                messages: state.newPostText,
                likecount: 0,
            };
            state.Posts.push(newPostMessage);
        }

        case UP_DATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
        }
        default : return state
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



export default profileReducer;