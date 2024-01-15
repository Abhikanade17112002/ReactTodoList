import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContexts";


function TodoItem({todo}) {
   const{toggleTodoComplete,todoList ,deleteTodo , updateTodo}  =  useContext(TodoContext) ;

   const [isTodoEditable , setIsTodoEditable] = useState(false);
   const [todoMsg, setTodoMsg] = useState(todo.todoContent);

   const editTodo = () =>{
    updateTodo(todo.todoId , todoMsg) ;
    
    setIsTodoEditable((prev)=>!prev) ;
   }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.todoComplete ?  "bg-[#ccbed7]" : "bg-[#c6e9a7]" 
                
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todoList.todoComplete}
                onChange={()=>toggleTodoComplete(todo.todoId)}
            />
            
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg   ${todoList.todoComplete ? "line-through" : ""}
                ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                }`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todoList.todoComplete) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todoList.todoComplete}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.todoId)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;