import { useState } from "react"
import Button from "./components/common/Button"

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  function handleSubmit(event){
    event.preventDefault();
    console.log("Employee Name : ", name)
    console.log("Employee Position : ", position)
  }

  return (
    <>
      <h1>Employee Management</h1>
      <p>Welcome to Employee Management System</p>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter employee name" value={name} onChange={(e) => setName(e.target.value)}></input>
        <input type="text" placeholder="Enter employee position" onChange={(e) => setPosition(e.target.value)}></input>
        <button type="submit">Submit</button>      
      </form>
    </>
  )
}

export default App
