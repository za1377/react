import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ErrorComponent from './ErrorComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import AuthProvider from './security/AuthContext';

import './Todo.css';

export default function Todo() {

    return(
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />

                    <Routes>
                        <Route path='/' element={<LoginComponent />}></Route>
                        <Route path='/login' element={<LoginComponent />}></Route>
                        <Route path='/logout' element={<LogoutComponent />}></Route>
                        <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
                        <Route path='/todos' element={<ListTodosComponent />}></Route>
                        <Route path='*' element={<ErrorComponent />}></Route>
                    </Routes>

                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )

}
