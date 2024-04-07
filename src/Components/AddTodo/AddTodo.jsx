import React, { useState } from 'react'
import { db } from '../../../Configuration/Firebase/Firebase';
import { getDocs , collection ,addDoc } from 'firebase/firestore'
import { useDispatch,useSelector } from 'react-redux';

const AddTodo = ({children}) => {
    const [ todo , setTodo] = useState("") ;
    const [completed , setCompleted] = useState(false) ;
    const userId = useSelector((state)=>state.auth.userData)?.payload ;
    console.log( userId,"userId");
    const collectionRef = collection(db , "Todos") ;
   


    const handleAddTodo = async () =>{


      try {

        await addDoc(collectionRef,{
          Todo: todo ,
          Completed : completed ,
          userId : userId 
        })
        
      } catch (error) {
        console.log(error) ;
      }
    }
  return (
    <div className='mycontainer'>
        <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e)=>setTodo(e.target.value)}/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" onClick={handleAddTodo}type="button">Add Todo</button>
  </div>
</div>
{
  children
}
    </div>
  )
}

export default AddTodo
