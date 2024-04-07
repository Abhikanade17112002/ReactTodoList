import React, { useState } from 'react'
import { getDocs , collection ,addDoc ,deleteDoc,doc } from 'firebase/firestore'
import { db } from '../../../Configuration/Firebase/Firebase';
const   Todo = ({todo ,id}) => {
  const [ isTodoEditable , setIsTodoEditable ] = useState(false) ;
  const [ completed , setCompleted] = useState(false) ;
  const handleCompleted = () =>{
    setCompleted((prev)=>!prev) ;
   
  }


  const handleDeleteTodo = async(id)=>{
    try {
      
       deleteDoc(doc(db, "Todos" , id)) ;
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="todo-wrapper">
    <div class="input-group mb-3">
    <div class="input-group-prepend">
    <div class="igt">
      <input type="checkbox" onClick={handleCompleted} aria-label="Checkbox for following text input"/>
    </div>
  </div>

  {
    isTodoEditable ? <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/> : <span className={ completed?  "text-decoration-line-through todo-text" : "todo-text"}>{todo.Todo} </span> 
  }
    <div class="input-group-append">
      {
          isTodoEditable ? <button class="btn btn-outline-primary" type="button">Edit</button>:null 
      }
    
  </div>
  <div class="input-group-append">
    <button class="btn btn-outline-primary" onClick={()=>handleDeleteTodo(id)} type="button">Delete</button>
  </div>
</div>
</div>
  )
}

export default Todo;
