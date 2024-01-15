
import { useContext } from "react";
import { TodoContext  } from "../contexts/TodoContexts";
function TodoForm() {
    
   const {addTodo} = useContext(TodoContext) ;
    return (
        <form  className="flex" onSubmit={(e)=>addTodo(e)}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
