import React from "react";
import styles from "./formControl.module.css";


export const Element = ({input, meta, ...props}) => {
    let tag = props.type;
    const hasError = meta.touched && meta.error;
    return (
        <div className = {styles.formControl +  " " +    (hasError ? styles.error : " ")}>
            {(tag === "textarea") ? <textarea {...input} {...props}/>
                                 : <input {...input} {...props}/>}

            {hasError && <div>
                            <span> {meta.error}</span>
                         </div>
            }
        </div>
    )
};

/*

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className = {styles.formControl +  " " +    (hasError ? styles.error : " ")}>
            <input {...input} {...props}/>

            {hasError && <div>
                <span> {meta.error}</span>
            </div>
            }
        </div>
    )
};*/
