import { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import {useAuth} from './security/AuthContext'

function LoginComponent() {
    const [username, setUsername] = useState("admin")
    const [password, setPassword] = useState("123456")

    const [successMessage, setSuccessMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    function handelChangeUsername(event) {
        setUsername(event.target.value)
    }


    function handelChangePassword(event) {
        setPassword(event.target.value)
    }

    function handelLogin() {
        if(username === 'admin' && password === 'pass') {
            authContext.setIsAuthenticated(true)
            navigate(`/welcome/${username}`)
        }else{
            setSuccessMessage(false)
            setErrorMessage(true)
        }
    }

    return(
        <div>
            <h1>Time to login!</h1>
            {successMessage && <div className='successMessage'>Authenticated successfuly!</div>}
            {errorMessage && <div className='errorMessage'>Authentication failed. Please check your credentials</div>}
            <div>
                <label>Username</label>
                <input type="text" name="username" value={username} onChange={handelChangeUsername}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={handelChangePassword}/>
            </div>
            <div>
                <button type="button" onClick={handelLogin}>login</button>
            </div>
        </div>
    )
}

export default LoginComponent