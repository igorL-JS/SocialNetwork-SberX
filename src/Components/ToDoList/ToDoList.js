import React from "react";
import p from "../ToDo/ToDo.module.css";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.toDoInput = React.createRef();
        this.toDoCheck = React.createRef()
    }
    state = {
        tasks: [
            {text: "Приготовить салат", checked: null},
            {text: "Сходить погулять с собакой", checked: null},
            {text: "Забрать интернет заказ", checked: null},
        ]
    };

    addtask() {
        this.setState(
            {
                ...this.state,
                tasks: [...this.state.tasks, {text: this.toDoInput.current.value, checked: false}]
            });
    }
    /*refreshCheck () {
        this.setState(
            {
                ...this.state,
                tasks:[
                    this.state.task.map( (t) => {
                    ...t, checked: this.toDoCheck.current.value]
                })
            }
            )
    }*/



    render() {
        let day = this.state.tasks;

        return (
            <div className={p.content}>
                <img src="/shapka.jpg" width="1000" heigth="40"/>

                <header className={p.header}>ToDoList ...</header>
                <div>
                    {day.map((t) => {
                        return (
                            <div> <input type="checkbox"  ref = {this.toDoCheck}/> {t.text} </div>
                        )
                    })}
                </div>
                <div>
                    <input type = "button" value = "ADD" onClick = {() => {this.addtask()}} />
                    <input type = "text" ref={this.toDoInput} />
                    <input type = "button" value = "DELETE"/>
                </div>
            </div>

        )
    }
}

export default ToDoList;