import p from "./ProfileInfo.module.css";
import React from "react";

const ProfileData = (props) => {
    return(
        <div className={p.aboutme}>

            <div className={p.item}> About me : {props.profile.aboutMe}  </div>
            <div className={p.item}> Full name : {props.profile.fullName}  </div>
            <div className={p.item}> Looking for a job : {props.profile.lookingForAJob ? <span>Yes</span> :
                <span> No </span>}  </div>
            <div className={p.item}> Contacts :
                <ul>
                    <li>Facebook - {props.profile.contacts.facebook}</li>
                    <li>VK - {props.profile.contacts.vk}</li>
                    <li>GitHub - {props.profile.contacts.github}</li>
                </ul>
            </div>
            {props.isOwner && <div>
                <input type="button" value="Change" onClick={props.activeEdit} />
            </div>
            }
        </div>

    )
}

export default ProfileData;