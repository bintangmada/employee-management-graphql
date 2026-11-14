import { useEffect } from "react";

function EmployeeForm({
    name, 
    setName, 
    email,
    setEmail,
    position, 
    setPosition, 
    addEmployee,
    modifEmployee, 
    setSubmitted,
    selectedEmployee,
    setSelectedEmployee
}){

    useEffect(() => {
        if(selectedEmployee) {
            setName(selectedEmployee.name);
            setEmail(selectedEmployee.email);
            setPosition(selectedEmployee.position)
        }
    }, [selectedEmployee, setName, setEmail, setPosition])

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const input = {
                name,
                email,
                position
            };

            if (selectedEmployee) {
                //Update employee
                await modifEmployee(selectedEmployee.id, input);
            } else {
                // Create employee
                await addEmployee(input);
            }

            setSubmitted(true);

            // Kosongkan form setelah berhasil
            setName("");
            setEmail("");
            setPosition("");
            setSelectedEmployee(null);
        } catch (error) {
            console.log("Failed to create emmployee: ", error);
        }
    }

    return(
        <form onSubmit={handleSubmit}>

            <h2>{selectedEmployee ? "Edit Employee" : "Create Employee"}</h2>
            
            <input
                type="text"
                placeholder="Input employee name"
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                    setSubmitted(false)
                }}

            />

            <input
                type="email"
                placeholder="Input employee email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                    setSubmitted(false)
                }}
            />

            <input
                type="text"
                placeholder="Input employee position"
                value={position}
                onChange={(e) => {
                    setPosition(e.target.value)
                    setSubmitted(false)
                }}
            />

            <button type="submit">{selectedEmployee ? "Update" : "Submit"}</button>
        </form>
    )
}

export default EmployeeForm;