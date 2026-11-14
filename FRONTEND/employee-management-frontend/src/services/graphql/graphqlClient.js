const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL;

export async function graphqlRequest(query, variables = {}) {
    const response = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    const result = await response.json();

    if(!response.ok){
        throw new Error(`HTTP Error: ${response.status}`);
    }

    if(result.errors){
        throw new Error(result.errors[0].message);
    }

    return result.data;
}