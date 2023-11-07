import { useEffect, useState } from "react"
import { retrieveAllUser } from "../api/UserApiService"

function ListUsersComponent() {

    const [users, setUsers] = useState([])

    useEffect (
        () => refreshUsers()
    )

    function refreshUsers() {
        retrieveAllUser.then( response => console.log(response))
        .catch(error => console.log(error))
    }
    
    return(
        <div className='container'>
            <h1>Think about what do you want to do!</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Birth Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(
                            user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.birthDate.toDateString()}</td>
                                </tr>
                            )
                        )}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListUsersComponent