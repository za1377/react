import { useEffect, useState } from "react"
import { deleteUserApi, retrieveAllUser } from "../api/UserApiService"
import { useNavigate } from "react-router-dom"

function ListUsersComponent() {

    const [users, setUsers] = useState([])
    const [message, setMessage] = useState(null)
    const navigate = useNavigate()

    useEffect (
        () => refreshUsers()
    )

    function refreshUsers() {
        retrieveAllUser().then( response => {
            setUsers(response.data)
        })
        .catch(error => console.log(error))
    }

    function deleteUser(id) {
        deleteUserApi(id).then( () => {
            refreshUsers()
            setMessage(`Delete user with id = ${id} was successfuly`)
        }).catch(error => console.log(error))
    }

    function updateUser(id) {
        navigate(`/user/${id}`)
    }

    function addUser() {
        navigate(`/user/-1`)
    }
    
    return(
        <div className='container'>
            <h1>Think about what do you want to do!</h1>
            {message && <div className="alert alert-success">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birth Date</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(
                            user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.birthDate.toString()}</td>
                                    <td><button className="btn btn-warning" onClick={() => deleteUser(user.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => updateUser(user.id)}>Update</button></td>
                                </tr>
                            )
                        )}
                        
                    </tbody>
                </table>
            </div>

            <button className="btn btn-success" onClick={addUser}>Add New User</button>
        </div>
    )
}

export default ListUsersComponent