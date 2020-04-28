import React from "react";
import p from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileContainer from "./ProfileInfo/ProfileContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div className={p.content}>

            <img src="/shapka.jpg" width="1000" heigth="40"/>
            <ProfileInfo profile = {props.profile}/>
            <MyPostsContainer store = {props.store} dispatch={props.dispatch} />
        </div>
    );
}
// Компоненета Profile возвращает jsx разметку, отрисовывет : шапку страницы, компоненету <ProfileInfo/>
//  и компоненету <MyPosts/> передавая ей через props массив постов и функцию addPost() из state.js
export default Profile;
