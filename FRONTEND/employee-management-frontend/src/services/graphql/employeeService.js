import { graphqlRequest } from "./graphqlClient";

export async function getAllEmployees() {
    const query = `
        query {
            getAllEmployees {
                id
                name
                email
                position
            }
        }
    `;
    const data = await graphqlRequest(query)
    return data.getAllEmployees;
}

export async function createEmployee(input) {
    const query = `
        mutation CreateEmployee($input: EmployeeInput!) {
            createEmployee(input : $input) {
                id
                name
                email
                position
            }
        }
    `;
    const data = await graphqlRequest(query, {input});
    return data.createEmployee;
}

