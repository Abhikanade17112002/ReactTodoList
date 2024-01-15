

import { useEffect, useState } from 'react';
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { TodoContext } from './contexts/TodoContexts';
function App() {
 
  const [ todoList , setTodoList ] = useState([]) ;


  const addTodo = (e) =>{
    e.preventDefault() ;
  // console.log(e.target[0].value) ;


   const todoValue = e.target[0].value ;

   setTodoList((prevState)=>[...prevState,{todoId:Math.floor(Math.random()*100 + 1),
    todoContent : todoValue ,
    todoComplete : "false" }]) ;

    e.target[0].value  = "";
    
   } ;

   const deleteTodo = (todoId) =>{
   

    setTodoList((prevState)=>prevState.filter((todo)=>todo.todoId !== todoId )) ;

   }
   const updateTodo = (todoId,todoContent) =>{
   
    setTodoList((prevState)=>prevState.map((todo)=>{
      
      // console.log(todo.todoComplete,todoId) ;
      
      return todo.todoId === todoId ? {...todo,todoContent:todoContent}:todo.todoContent})) ;
   }

   const toggleTodoComplete = (todoId)=>{
   
    setTodoList((prevState)=>prevState.map((todo)=>{
      
      // console.log(todo.todoComplete,todoId) ;
      
      return todo.todoId === todoId ? {...todo,todoComplete:!todo.todoComplete}:todo.todoComplete})) ;

   }



   useEffect( ()=>{

    // const todoList = JSON.parse(localStorage.getItem("todoList") ) ;
    const todoList = JSON.parse(localStorage.getItem("todoList"));


    if( todoList && todoList.length > 0 )
    {
      setTodoList(todoList) ;
    }

   } , [] ) ;

   useEffect( ()=>{

    localStorage.setItem("todoList" , JSON.stringify(todoList)) ;


    

   } , [todoList] ) ;
   
  return (
  
    <>
    <TodoContext.Provider value={{todoList , addTodo ,deleteTodo , toggleTodoComplete,updateTodo}}>

            <div className="bg-[#172842] min-h-screen py-8">
                        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                            <div className="mb-4">
                              <TodoForm></TodoForm>
                            </div>
                            <div className="flex flex-wrap gap-y-3">
                              
                                
                              {todoList.map((item)=><TodoItem key={item} todo={item}></TodoItem>)}
                            </div>
                        </div>
            </div>

    </TodoContext.Provider>
    </>
  )
}

export default App
