import React from "react";
import {Field, reduxForm} from "redux-form";
import p from "./ProfileInfo.module.css";

const  ProfileDataForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} >
                <div>
                    <div>
                        <Field name="aboutme" component="input"
                               placeholder="About me"/>
                    </div>
                    <div>
                        <Field name="fullName" component="input"
                               placeholder="Full name"/>
                    </div>
                    <div>
                        Looking for a job :
                        <Field type="checkbox" name="lookingForAJob" component="input"/>
                    </div>
                    <div>
                        Discription :
                        <Field  name="lookingForAJobDescription" component="input"/>
                    </div>
                    <div>
                    Contacts :
                        <ul>
                            <li>Facebook - <Field name="contacts.facebook" component="input"
                                       placeholder="Facebook"/></li>
                            <li>VK - <Field name="contacts.vk" component="input"
                                                placeholder="vkontakte"/></li>
                            <li>GitHub - <Field name="contacts.github" component="input"
                                                  placeholder="Github"/></li>
                        </ul>
                    </div>
                </div>
                <input type="submit" value="Submit"/>
                <input type="button" value="Cancel" onClick={props.disActiveEdit}/>
            </form>


        </div>
    )
};

const ProfileEditDataForm = reduxForm({form: "Data"})(ProfileDataForm);
export default ProfileEditDataForm;
