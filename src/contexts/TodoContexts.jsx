import { createContext } from "react";


export const TodoContext = createContext({
     
    todoList : [
        {
            todoId : 1 ,
            todoContent : "Good Morning " ,
            todoComplete : "false" 
        }
    ] ,
    addTodo : (todoContent) =>{} ,
    deleteTodo : (todoId) =>{} ,
    updateTodo : (todoId,todoContent) =>{} ,
    toggleTodoComplete : (id) => {} ,


})
