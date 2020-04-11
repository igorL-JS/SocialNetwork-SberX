import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import TextArea from "./Text_area/TextArea";

const MyPosts = (props) => {

    let PostElement = props.post.map( (m) => {
        return (<Post messages={m.messages} likecount={m.likecount}/>)
    }
    );
    // MyPosts принимает через props массив объектов Posts (Из state.js), перебирает массив с помощью .map
    // преобразует его в массив компонент <Post/>.

    return (
        <div className={s.posts}>
            <div className={s.item}> My Posts</div>
            <TextArea addpost={props.addpost} posttext={props.posttext} dispatch={props.dispatch}/>
            {PostElement}
        </div>
    );
};
// MyPosts возвращает JSX разметку, включая компоненету Textarea и массив компонент <Post />
export default MyPosts;
