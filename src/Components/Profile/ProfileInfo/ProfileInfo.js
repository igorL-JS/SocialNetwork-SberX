import React, {useState} from "react";
import p from "./ProfileInfo.module.css";
import Preloader from "../../Users/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

import ProfileData from "./ProfileData";
import ProfileEditDataForm from "./ProfileEditDataForm";


const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    const activeEdit = () => {
        setEditMode(true)
    };

    const disActiveEdit = () => {
        setEditMode(false)
    };
    const chooseAvatar = (e) => {
        if (e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    };

    const onSubmit =(formData) => {
        debugger;
        props.changeData(formData);
        setEditMode(false);
    };

    if (!props.profile) {
        return <Preloader/>
    }
debugger;
        return (
            <div className={p.content}>

                <div className={p.avatar}>
                    <img src={(props.profile.photos.large) || ("/avatar_1.jpg")}/>

                    {props.isOwner && <div>
                                        <input type="file" title="&nbsp;" onChange={chooseAvatar}/>
                                      </div>
                    }
                </div>

                <div className={p.item}>
                    <h2>{props.profile.fullName}</h2>
                    <ProfileStatusWithHook status={props.status} updatestatus={props.updatestatus}/>

                    { editMode
                        ? <ProfileEditDataForm  initialValues={props.profile}   disActiveEdit = {disActiveEdit} onSubmit={onSubmit}/>

                        : <ProfileData profile = {props.profile} isOwner = {props.isOwner} activeEdit = {activeEdit}/>
                    }
                </div>

            </div>
        )
    };

export default ProfileInfo;


