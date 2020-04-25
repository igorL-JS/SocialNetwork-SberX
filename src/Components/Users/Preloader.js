import React from "react";
import preloader from "./../../img/preloader.gif";



const Preloader = (props) => {
    return (
        <div align="center" >
            <img  width="150px" src = {preloader}/>
        </div>
    )
}

export default Preloader;