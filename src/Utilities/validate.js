import React from "react";


export const requiredField = (value) => {
    if (value) {return undefined}
        return "Field is required"
};


export const maxLengthCreator = (maxlength) => (value) => {
    if (value.length>maxlength) return (`Max length should be less than ${maxlength} characters`);
    return undefined
};
