import ToDo from "./ToDo";
import ToDoReducer, {doneAC, dontDoneAC} from "../../redux/ToDoReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return (
    {toDo: state.toDoPage.tasks}
    )
};


let mapDispatchToProps = (dispatch) => {
    return  {

        done: (taskId) => {
            dispatch(doneAC(taskId))
        },


        dontdone: (taskId) => {
            dispatch(dontDoneAC(taskId))
        }
    }
};




const ToDoContainer = connect(mapStateToProps,mapDispatchToProps)(ToDo);

export default ToDoContainer;