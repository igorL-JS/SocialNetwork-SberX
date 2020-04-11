import React from "react";
import s from "./TextArea.module.css";
import {addPostsActionCreator, upDateNewPostTextActionCreator} from "../../../../redux/ProfileReducer";

const TextArea = (props) => {
    /*let newPostElement = React.createRef();*/

    // на переменную newPostElement вешаем ссылку на элемент, там где укажем атрибут ref = {newPostElement} с этим
    //с этим элементом и работаем

    let onTextArea = (e) => {
        let text = e.target.value;
        props.dispatch (upDateNewPostTextActionCreator(text));
    };
    // при изменениях в TextArea запускаем функцию onTextArea, она считывает текст из Area и диспатчит объект action в store

    let addPosts = () => {
        props.dispatch(addPostsActionCreator());
        props.dispatch(upDateNewPostTextActionCreator(""));
    };
    // при клике на кнопку Add post диспатчим в store объект action, в store пушим новый пост, возвращаем в UI,
    // очищаем textarea

    return (
        <div className={s.item}>
            <textarea onChange={onTextArea} value={props.posttext}  cols="70" rows="6"/>
            <div>
                <button onClick={addPosts}> Add post</button>
                <button> Remove</button>
            </div>
        </div>
    );
};
// возвращаем JSX разметку, при клике на кнопку Add post вызываем функция addPosts.
export default TextArea;
