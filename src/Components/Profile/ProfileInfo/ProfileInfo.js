import React from "react";
import p from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
    return (
        <div className={p.content}  >

            <div>
                <img src="/avatar_1.jpg" width="300" heigth="150"/>
            </div>

            <div className={p.item}> Discription </div>

        </div>
    );
}
export default ProfileInfo;
