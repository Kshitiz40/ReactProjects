import { useEffect, useState } from "react";
import {ToDoProvider} from "./Contexts";
import TodoForm from "./Components/ToDoForm";
import TodoItem from "./Components/ToDoItemUI";

function App() {
 
  const [todos, setToDoS] = useState([]);

  const addToDo = (todo) => {
    console.log(todos)
    setToDoS((prev) => [{id:Date.now(),...todo},...prev])
    console.log(todos)
  };

  const editToDo = (id,todo) => {
    setToDoS( (prev) => prev.map( (prevToDo) => (prevToDo.id===id?todo:prevToDo) ) )
  };

  const deleteToDo = (id) => {
    setToDoS((prev) => prev.filter((prevToDo) => prevToDo.id!==id));
  };

  const toggleComplete = (id) => {
    setToDoS( (prev) => prev.map( (prevToDo) => prevToDo.id===id?{...prevToDo, completed:!prevToDo.completed}:prevToDo ) )
  };  

  useEffect( () => { 
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos  && todos.length > 0){
      setToDoS(todos);
    }
  }, [] )

  useEffect( () => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos] )

  return (
    <ToDoProvider value={{todos,addToDo,editToDo,deleteToDo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((todo)=> <TodoItem key={todo.id} todo={todo} />)
            }
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App
