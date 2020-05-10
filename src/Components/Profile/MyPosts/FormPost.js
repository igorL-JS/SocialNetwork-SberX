import s from "./MyPosts.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../Utilities/validate";
import {Element, Textarea} from "../../formControl/FormControl";

let maxLength10 = maxLengthCreator(10);

const FormPost = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.item}>

                <Field type = "textarea" name = "text" component = {Element} cols = "70" rows = "5" validate = {[requiredField,maxLength10]} placeholder="What's new ?"/>
                <div>
                    <input type="submit" value="ADD POST "/>
                    <input onClick={props.reset} type="button"  value="REMOVE"/>
                </div>
            </div>
        </form>
)
};

const PostReduxForm = reduxForm({form: "Post"})(FormPost);

export default PostReduxForm
    
