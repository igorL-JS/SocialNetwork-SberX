import React from "react";

import TextArea from "./Text_area/TextArea";
import {addPostsActionCreator, upDateNewPostTextActionCreator} from "../../../redux/ProfileReducer";


const TextAreaContainer = (props) => {

    let onTextArea = (text) => {
        props.store.dispatch (upDateNewPostTextActionCreator(text));
    };
    // при изменениях в TextArea запускаем функцию onTextArea, она считывает текст из Area и диспатчит объект action в store

    let addPosts = () => {
        props.store.dispatch(addPostsActionCreator());
        props.store.dispatch(upDateNewPostTextActionCreator(""));
    };
    // при клике на кнопку Add post диспатчим в store объект action, в store пушим новый пост, возвращаем в UI,
    // очищаем textarea*/

    return (<TextArea posttext={props.posttext}
                      upDateNewPostText = {onTextArea}
                      addpost = {addPosts}/>);
};
export default TextAreaContainer;
