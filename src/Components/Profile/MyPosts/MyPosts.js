import React from "react";
import s from "./MyPosts.module.css";
import MyPostsContainer from "./MyPostsContainer";
import PostReduxForm from "./FormPost";


const MyPosts = (props) => {

    let PostElement = props.posts.map((m) => {
        return (
            <div className={s.item}>
                <img src="/avatar_female.png"/>
                <div> {m.messages} </div>
                <input onClick={() => {props.updatelike(m.id)}} type="submit" value={`Like - ${m.likecount}`}/>
            </div>
        )
    }
    );

    const onSubmit = (formData) => {

        return props.addpost(formData.text)
    };


    return (
        <div className={s.posts}>
            <div className={s.item}> My Posts</div>
            <PostReduxForm onSubmit={onSubmit}/>
            <div>
                <p>{PostElement}</p>
            </div>
        </div>
    );
};
export default MyPosts;
