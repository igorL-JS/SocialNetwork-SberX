import React from "react";
import {addPostsActionCreator, upDateNewPostTextActionCreator} from "../../../redux/ProfileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.Posts,
        posttext: state.profilePage.newPostText,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        upDateNewPostText: (text) => {
            dispatch(upDateNewPostTextActionCreator(text))
        },
        addpost: () => {
            dispatch(addPostsActionCreator());
            dispatch(upDateNewPostTextActionCreator(""));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
