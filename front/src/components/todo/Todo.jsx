import { useState } from 'react';
import './Todo.css';

export default function Todo() {

    const [username, setUsername] = useState("admin")

    function handelChangeUsername(event) {
        setUsername(event.target.value)
    }

    const [password, setPassword] = useState("123456")

    function handelChangePassword(event) {
        setPassword(event.target.value)
    }
    return(
        <div>
            <div>
                <label>Username</label>
                <input type="text" name="username" value={username} onChange={handelChangeUsername}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={handelChangePassword}/>
            </div>
            <div>
                <button type="button">login</button>
            </div>
        </div>
    )
}