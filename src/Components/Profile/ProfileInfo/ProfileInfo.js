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

                <div>
                    <img src={(props.profile.photos.large != null) ? (props.profile.photos.small) : ("/avatar_1.jpg")} width="300" heigth="150"/>

                </div>
                <div>
                <ProfileStatusWithHook status = {props.status} updatestatus = {props.updatestatus}/>
                </div>

                <div className={p.item}> My name: {props.profile.fullName}
                    <div className={p.item}> About me : {props.profile.aboutMe}  </div>
                    <div className={p.item}> Contacts :
                        <ul>
                        <li>Facebook -  {props.profile.contacts.facebook}</li>
                            <li>VK -  {props.profile.contacts.vk}</li>
                            <li>GitHub -  {props.profile.contacts.github}</li>
                        </ul>
                        </div>
                </div>

            </div>
        );
    };

export default ProfileInfo;
