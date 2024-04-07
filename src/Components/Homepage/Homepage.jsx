import React, { useState } from 'react'
import { db } from '../../../Configuration/Firebase/Firebase';
import { getDocs , collection ,addDoc } from 'firebase/firestore'
import { useEffect } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import { useSelector } from 'react-redux';
const Homepage = () => {
  const collectionRef = collection(db , "Todos") ;
 const [ Todos , setTodos] = useState([]) ;
 const userId  = useSelector( (state) => state.auth.userData?.payload) ;
 
  useEffect( () => {
    const getTodos = async () =>{
      try {
         const data = await getDocs(collectionRef) ;
         let filteredData = data.docs.map( (doc) =>({
          ...doc.data() ,
          id : doc.id
         }))

         filteredData = filteredData.filter( (todo)=> (userId === todo.userId ))
         console.log( filteredData,"filterted Data") ;
         setTodos(filteredData);
       
      } catch (error) {
        console.log(error) ;
      }
    }

    getTodos() ;
  } , [Todos])

  return (
    <div className="addTodoContainer container">

    
   < AddTodo>
   <div>
     {
      Todos.map( (todo) =>    
      
        <Todo id ={todo.id} todo={todo} key={todo.id}></Todo>

      )

   
     }
    </div>
   </AddTodo>
    
    </div>
   
  )
}

export default Homepage
