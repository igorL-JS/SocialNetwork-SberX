import React from "react";
import p from "./ProfileInfo.module.css";
import Preloader from "../../Users/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";


const ProfileInfo = (props) => {

    if (!props.profile) {

        return <Preloader/>
    }

        return (
            <div className={p.content}>

                <div className={p.avatar}>
                    <img src={(props.profile.photos.small != null) ? (props.profile.photos.large) : ("/avatar_1.jpg")}/>
                </div>

                <div className={p.item}>
                    <h2>{props.profile.fullName}</h2>
                    <ProfileStatusWithHook status={props.status} updatestatus={props.updatestatus}/>

                    <div className={p.item}> About me : {props.profile.aboutMe}  </div>
                    <div className={p.item}> Contacts :
                        <ul>
                            <li>Facebook - {props.profile.contacts.facebook}</li>
                            <li>VK - {props.profile.contacts.vk}</li>
                            <li>GitHub - {props.profile.contacts.github}</li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    };

export default ProfileInfo;
