import redux from "redux";
const DONE = "Done";
const DONT_DONE = "Don't done";

let initialState = {
    tasks : [
    {id:1, ready: true, text: "Купить в магазине рукколу"},
    {id:2, ready: false, text: "Забрать запчасти в магазине Автодок"},
    {id:3, ready: true, text: "Подписать договор" },
    {id:4, ready: false, text: "Решить вопрос с детским садом для Егора"},
    ]
};


let ToDoReducer = (state=initialState, action) => {
    switch (action.type) {
        case DONE :
            return {
                ...state,
                tasks: state.tasks.map((t) => {
                    if (t.id === action.taskId)
                        return {...t, ready: true};
                    return t
                })
            };
        case DONT_DONE:
            return {
                ...state,
                tasks: state.tasks.map((t) => {
                    if (t.id === action.taskId)
                        return {...t, ready: false};
                    return t
                })
            };
        default:
            return (state)
    }
};


export const doneAC= (taskId) => {
    return {type: DONE, taskId}
};

export const dontDoneAC = (taskId) => {
    return {type: DONT_DONE, taskId}
};

export default ToDoReducer;