import AddToDo from "./components/AddToDo"
import Todo from "./components/Todo"

function App() {

  return ( 
    <div
    className="w-full p-10"
    >
      <h1 className='text-3xl text-gray-400'>Learn About Redux-Toolkit</h1>
      <AddToDo />
      <Todo />
    </div>
  )
}

export default App
