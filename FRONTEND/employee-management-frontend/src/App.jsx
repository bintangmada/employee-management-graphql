import { useState, useEffect, useMemo } from "react"
import EmployeeForm from "./components/employee/EmployeeForm";
import EmployeeTable from "./components/employee/EmployeeTable";
import useEmployees from "./hooks/useEmployees";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const {
    employees, 
    loading, 
    error, 
    addEmployee, 
    modifEmployee,
    removeEmployee
  } = useEmployees();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [search, setSearch] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const filteredEmployees = useMemo(() => {
    console.log("Filtered employees");
    return employees.filter(employee => 
      employee.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [employees, search])

  useEffect(() => {
    console.log("Name: ", name)
    
    return () => {
      console.log("Cleanup dijalankan")
    }
  },[name])

  function handleEdit(employee) {
    setSelectedEmployee(employee)
  }

  async function handleDelete(id) {
    try {
      await removeEmployee(id);
    } catch (error) {
      console.log("Failed to delete employee: ", error);
    }
  }

  return (
    <>
      <h1>Employee Management</h1>
      <p>Welcome to Employee Management System</p>
      
      <br/>

      {loading && <p>Loading employees...</p>}

      {error && <p>Error: {error}</p>}

      <input
        type="text"
        placeholder="Search employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Keyword : {search}</p>

      {!loading && !error && 
      (<EmployeeTable 
        employees={filteredEmployees}
        onEdit={handleEdit}
        onDelete={handleDelete}
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
      <br/>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>

      {showMessage && <p>Hello React!</p>}
    </>
  )
}

export default App
