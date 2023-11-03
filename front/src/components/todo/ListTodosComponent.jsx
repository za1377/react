function ListTodosComponent() {

    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 2, today.getMonth(), today.getDay())

    const todos = [
        {id: 1, discription: "learn spring boot", done:false, targetDate:targetDate},
        {id: 2, discription: "learn react", done:false, targetDate:targetDate},
        {id: 3, discription: "learn full stack developer", done:false, targetDate:targetDate}
    ]
    return(
        <div className='container'>
            <h1>Think about what do you want to do!</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Discription</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.discription}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodosComponent