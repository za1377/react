import { useState } from 'react';
import { useNavigate} from 'react-router-dom'
import {useAuth} from './security/AuthContext'

function LoginComponent() {
    const [username, setUsername] = useState("user")
    const [password, setPassword] = useState("password")

    const [errorMessage, setErrorMessage] = useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    function handelChangeUsername(event) {
        setUsername(event.target.value)
    }


    function handelChangePassword(event) {
        setPassword(event.target.value)
    }

    async function handelLogin() {
        if(await authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
        }else{
            setErrorMessage(true)
        }
    }

    return(
        <div>
            <h1>Time to login!</h1>
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