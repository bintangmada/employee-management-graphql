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

export async function updateEmployee(id, input) {
    const query = `
        mutation UpdateEmployee($id: ID!, $input: EmployeeInput!) {
            updateEmployee(id: $id, input: $input) {
                id
                name
                email
                position
            }
        }
    `;
    const data = await graphqlRequest(query, {
        id,
        input
    })
    return data.updateEmployee;
}

