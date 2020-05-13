import React, {useState} from "react";
import p from "./Music.module.css";


const Music = () => {
    const [count, setCount] = useState(0);
    const handleAlertClick = () => {
        setTimeout( () => {
            alert(`You click ${count} times`);
        },
        3000);
    };
    
    return (
        <div className={p.content}>
            <img src="/shapka.jpg" width="1000" heigth="40"/>

            <p>You clicked {count} times</p>
            <input type="submit" onClick = {() => setCount(count+1)}> Click me </input>
            <input type="submit" onClick= {handleAlertClick}>Show alert</input>
        </div>
    );
}
export default Music;
