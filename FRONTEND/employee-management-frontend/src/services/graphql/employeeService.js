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
        mutation {
            createEmployee(input : {
                name: "${input.name}"
                email: "${input.email}"
                position: "${input.position}"
            }) {
                id
                name
                email
                position
            }
        }
    `;
    const data = await graphqlRequest(query);
    return data.createEmployee;
}

