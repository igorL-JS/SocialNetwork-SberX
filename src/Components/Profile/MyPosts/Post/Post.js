import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="/avatar_female.png"/>
            <div> {props.messages} </div>
            <input type="submit" value={`Like - ${props.likecount}`}/>
        </div>
    );
}
// Компонента (тупая функция) Post возвращает JSX разметку. отрисововывает в UI аватарку, сообщение,
// кнопку Like + кол-во лайков

export default Post;
