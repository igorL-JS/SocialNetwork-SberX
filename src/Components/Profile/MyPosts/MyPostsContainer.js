import React from "react";
import {
    addPostsActionCreator,
    upDateLikeAC,
} from "../../../redux/ProfileReducer";
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
        addpost: (text) => {
            dispatch(addPostsActionCreator(text));
        },
        updatelike: (postId) => {
            dispatch(upDateLikeAC(postId));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
