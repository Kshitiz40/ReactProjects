import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0);

  const addValue = ()=>{
    if(counter >= 19) return;
    setCounter(prevCounter=> prevCounter+1)
    setCounter(Counter=> Counter+1)
    
  }
  const decreaseValue = ()=>{
    if(counter === 0) return;
    setCounter(counter-1);
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App