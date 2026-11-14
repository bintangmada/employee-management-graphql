import { useEffect, useState } from "react";
import { createEmployee, getAllEmployees } from "../services/graphql/employeeService";

function useEmployees() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchEmployees() {
            try {
                setLoading(true);
                const data = await getAllEmployees();
                setEmployees(data);
            }catch (error) {
                setError(error.message);
            }finally {
                setLoading(false);
            }
        }
        fetchEmployees();
    }, []);

    async function addEmployee(input) {
        const newEmployee = await createEmployee(input);

        setEmployees(prevEmployees => [
            ...prevEmployees,
            newEmployee
        ]);

        return newEmployee;
    }

    return {
        employees,
        loading,
        error,
        addEmployee
    }
}

export default useEmployees;