import React, {useEffect, useState} from "react";


const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {setStatus(props.status)}, [props.status]);

    const activeEdit = () => {
        setEditMode(true)
    };

    const onChangeStatus = (e) => {
        setStatus(e.target.value)
    };

    const disActiveEdit = () => {
        setEditMode(false);
        props.updatestatus(status)
    };

    return (

        <div>
            {editMode
                ? <span> Status : <input onChange={onChangeStatus} onBlur={disActiveEdit} type="text" value={status} autoFocus/></span>
                : <span onDoubleClick={activeEdit}>Status: {status}</span>
            }
        </div>
    )
};

export default ProfileStatusWithHook