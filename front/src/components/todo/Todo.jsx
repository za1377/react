import { useState } from 'react';
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'
import './Todo.css';

export default function Todo() {

    return(
        <div>
            <HeaderComponent />

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/logout' element={<LogoutComponent />}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
                    <Route path='/list-todos' element={<ListTodosComponent />}></Route>
                    <Route path='*' element={<ErrorComponent />}></Route>
                </Routes>
            </BrowserRouter>

            <FooterComponent />
        </div>
    )

}

function LoginComponent() {
    const [username, setUsername] = useState("admin")
    const [password, setPassword] = useState("123456")

    const [successMessage, setSuccessMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const navigate = useNavigate()


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

function WelcomeComponent() {

    const {username} = useParams()

    return(
        <div>
            <h1>Welcome to our application {username}</h1>
            <div>Manage your todos list <Link to="/list-todos">Go here</Link></div>
        </div>
    )
}

function ErrorComponent() {
    return(
        <div>
            <h1>We can not found your page!</h1>
            <div>404</div>
        </div>
    )
}

function ListTodosComponent() {

    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 2, today.getMonth(), today.getDay())

    const todos = [
        {id: 1, discription: "learn spring boot", done:false, targetDate:targetDate},
        {id: 2, discription: "learn react", done:false, targetDate:targetDate},
        {id: 3, discription: "learn full stack developer", done:false, targetDate:targetDate}
    ]
    return(
        <div>
            <h1>Think about what do you want to do!</h1>
            <div>
                <table>
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

function HeaderComponent() {
    return(
        <div className='header'>
            Header <hr/>
        </div>
    )
}

function FooterComponent() {
    return(
        <div className='footer'>
           <hr/> Footer 
        </div>
    )
}

function LogoutComponent() {
    return(
        <div>
            <h1>Your logged out</h1>
            <div>Thank you to use our Application</div>
        </div>
    )
}