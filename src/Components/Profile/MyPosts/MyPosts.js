import React from "react";
import s from "./MyPosts.module.css";
import MyPostsContainer from "./MyPostsContainer";

const MyPosts = (props) => {

    let PostElement = props.posts.map((m) => {
    debugger;
        return (
            <div className={s.item}>
                <img src="/avatar_female.png"/>
                <div> {m.messages} </div>
                <input onClick={() => {props.updatelike(m.id)}} type="submit" value={`Like - ${m.likecount}`}/>
            </div>
        )
    }
    );

            /*        <Post dispatch={props.dispatch} messages={m.messages} likecount={m.likecount}/>)
            */

    // MyPosts принимает через props массив объектов Posts , перебирает массив с помощью .map
    // преобразует его в массив компонент <Post/>.

    let onTextArea = (e) => {
        let text = e.target.value;
        props.upDateNewPostText(text);
    };
    // при изменениях в TextArea запускаем функцию onTextArea, она считывает текст из Area и диспатчит объект action в store

    let addPosts = () => {
        props.addpost();
    };
    // при клике на кнопку Add post диспатчим в store объект action, в store пушим новый пост, возвращаем в UI,
    // очищаем textarea

    return (
        <div className={s.posts}>
            <div className={s.item}> My Posts</div>
            <div className={s.item}>
                <textarea onChange={onTextArea} value={props.posttext} cols="70" rows="6"/>
                <div>
                    <button onClick={addPosts}> Add post</button>
                    <button> Remove</button>
                </div>
            </div>
            <div>
                <p>{PostElement}</p>
            </div>
        </div>
    );
};
// MyPosts возвращает JSX разметку, включая компоненету Textarea и массив компонент <Post />
export default MyPosts;
