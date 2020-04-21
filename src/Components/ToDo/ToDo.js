import React from "react";
import ToDoContainer from "./ToDoContainer";
import p from "./ToDo.module.css";
import ToDoReducer from "../../redux/ToDoReducer";



const ToDo = (props) => {
    let taskElement = props.toDo.map((t) => {
        return(
            <ul>
                <li> № задачи - {t.id}</li>
                <li> Задача -  {t.text}</li>
                <li>
                    {(t.ready)
                        ? <input onClick={ () => {props.dontdone(t.id)}} type = "submit" value = "Готово"/>
                        : <input onClick={ () => {props.done(t.id)}} type = "submit" value = "Не сделано"/>}
                </li>

            </ul>

       )});
    return (
        <div className={p.content}>
            <img src="/shapka.jpg" width="1000" heigth="40"/>
            <div>
                {taskElement}
            </div>
        </div>
    )
};


export default ToDo;
