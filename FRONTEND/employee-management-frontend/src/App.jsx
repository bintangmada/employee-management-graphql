import { useState, useEffect } from "react"
import EmployeeForm from "./components/employee/EmployeeForm";
import EmployeeTable from "./components/employee/EmployeeTable";
import useEmployees from "./hooks/useEmployees";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const {employees, loading, error, addEmployee} = useEmployees();

  useEffect(() => {
    console.log("Name: ", name)
    
    return () => {
      console.log("Cleanup dijalankan")
    }
  },[name])

  return (
    <>
      <h1>Employee Management</h1>
      <p>Welcome to Employee Management System</p>
      
      <br/>

      {loading && <p>Loading employees...</p>}

      {error && <p>Error: {error}</p>}

      {!loading && !error && (<EmployeeTable employees={employees}/>)}

      <br/>
      
      <EmployeeForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        position={position}
        setPosition={setPosition}
        addEmployee={addEmployee}
        setSubmitted={setSubmitted}
      />

      {submitted && <p>Employee submitted successfully</p>}
    </>
  )
}

export default App
