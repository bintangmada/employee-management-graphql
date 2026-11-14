function EmployeeForm({
    name, 
    setName, 
    email,
    setEmail,
    position, 
    setPosition, 
    addEmployee, 
    setSubmitted
}){

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await addEmployee({
                name,
                email,
                position
            });

            setSubmitted(true);

            setName("");
            setEmail("");
            setPosition("");
        } catch (error) {
            console.log("Failed to create emmployee: ", error);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            
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
                type="text"
                placeholder="Input employee position"
                value={position}
                onChange={(e) => {
                    setPosition(e.target.value)
                    setSubmitted(false)
                }}
            />

            <button type="submit">Submit</button>
        </form>
    )
}

export default EmployeeForm;