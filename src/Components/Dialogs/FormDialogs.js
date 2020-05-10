import p from "./Dialogs.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../Utilities/validate";
import {Element} from "../formControl/FormControl";

let maxLength50 = maxLengthCreator(50);
const FormDialogs = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={p.textarea}>
                <div>
                    <Field type="textarea" name="textarea" component={Element} rows="3" cols="70" validate={[requiredField, maxLength50]} placeholder="Enter your message" />
                </div>
                <div>
                    <input type="submit" value="Send">
                    </input>
                </div>
            </div>
        </form>
    )
};


export const FormDialogsRedux = reduxForm({form: "Dialogs"})(FormDialogs);

