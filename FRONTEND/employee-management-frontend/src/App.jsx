import { useState, useEffect } from "react"
import Button from "./components/common/Button"
import EmployeeForm from "./components/employee/EmployeeForm";

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [employees, setEmployees] = useState([]);

  function handleSubmit(event){
    event.preventDefault();
    console.log("Employee Name : ", name)
    console.log("Employee Position : ", position)
    setSubmitted(true);
  }

  useEffect(() => {
    console.log("Name: ", name)
    
    return () => {
      console.log("Cleanup dijalankan")
    }
  },[name])

  useEffect(() => {
    fetch("http://localhost:8080/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `
          query {
            getAllEmployees {
              id
              name
              email
              position
            }
          }
        `
      })
    })
    .then(response => response.json())
    .then(result => {
    console.log(result);
    setEmployees(result.data.getAllEmployees)
    })
  },[]);
  

  return (
    <>
      <h1>Employee Management</h1>
      <p>Welcome to Employee Management System</p>
      <br/>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position}
          </li>
        ))}
      </ul>
      <br/>
      
      <EmployeeForm
        name={name}
        setName={setName}
        position={position}
        setPosition={setPosition}
        handleSubmit={handleSubmit}
        setSubmitted={setSubmitted}
      />

      {submitted && <p>Employee submitted successfully</p>}
    </>
  )
}

export default App
