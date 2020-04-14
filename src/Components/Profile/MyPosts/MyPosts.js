import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import TextAreaContainer from "./TextAreaContainer";

const MyPosts = (props) => {
    let state = props.store.getState().profilePage;
    debugger;
    let PostElement = state.Posts.map( (m) => {
        return (<Post  dispatch = {props.dispatch} messages={m.messages} likecount = {m.likecount}/>)
    }
    );
    // MyPosts принимает через props массив объектов Posts (Из state.js), перебирает массив с помощью .map
    // преобразует его в массив компонент <Post/>.

    return (
        <div className={s.posts}>
            <div className={s.item}> My Posts</div>
            <TextAreaContainer store = {props.store} posttext = {state.newPostText} />
            {PostElement}
        </div>
    );
};
// MyPosts возвращает JSX разметку, включая компоненету Textarea и массив компонент <Post />
export default MyPosts;
