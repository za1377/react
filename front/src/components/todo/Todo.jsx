import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './Todo.css';

export default function Todo() {

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='' element={<LoginComponent />}></Route>
                    <Route path='' element={<WelcomeComponent />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )

}

function LoginComponent() {
    const [username, setUsername] = useState("admin")
    const [password, setPassword] = useState("123456")

    const [successMessage, setSuccessMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)


    function handelChangeUsername(event) {
        setUsername(event.target.value)
    }


    function handelChangePassword(event) {
        setPassword(event.target.value)
    }

    function handelLogin() {
        if(username === 'admin' && password === 'pass') {
            setSuccessMessage(true)
            setErrorMessage(false)
        }else{
            setSuccessMessage(false)
            setErrorMessage(true)
        }
    }

    return(
        <div>
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

function WelcomeComponent() {
    return(
        <div>
            Welcome Component
        </div>
    )
}