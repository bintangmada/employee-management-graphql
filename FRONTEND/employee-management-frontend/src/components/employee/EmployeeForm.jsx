function EmployeeForm({name, setName, position, setPosition, handleSubmit, setSubmitted}){
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