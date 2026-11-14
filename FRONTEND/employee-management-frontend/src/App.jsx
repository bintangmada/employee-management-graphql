import { useState, useEffect } from "react"
import EmployeeForm from "./components/employee/EmployeeForm";
import EmployeeTable from "./components/employee/EmployeeTable";
import useEmployees from "./hooks/useEmployees";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const {employees, loading, error, addEmployee, modifEmployee} = useEmployees();
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    console.log("Name: ", name)
    
    return () => {
      console.log("Cleanup dijalankan")
    }
  },[name])

  function handleEdit(employee) {
    setSelectedEmployee(employee)
  }

  return (
    <>
      <h1>Employee Management</h1>
      <p>Welcome to Employee Management System</p>
      
      <br/>

      {loading && <p>Loading employees...</p>}

      {error && <p>Error: {error}</p>}

      {!loading && !error && 
      (<EmployeeTable 
        employees={employees}
        onEdit={handleEdit}
      />)}

      <br/>
      
      <EmployeeForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        position={position}
        setPosition={setPosition}
        addEmployee={addEmployee}
        modifEmployee={modifEmployee}
        setSubmitted={setSubmitted}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
      />

      {submitted && <p>Employee submitted successfully</p>}
    </>
  )
}

export default App
