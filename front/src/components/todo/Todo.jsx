import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ErrorComponent from './ErrorComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import AuthProvider, { useAuth } from './security/AuthContext';

import './Todo.css';

function AuthenticatedRoute({children}) {
    const authContext = useAuth();
    if(authContext.isAuthenticated){
        return children
    }

    return <Navigate to="/" />
}

export default function Todo() {

    return(
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />

                    <Routes>
                        <Route path='/' element={<LoginComponent />}></Route>
                        <Route path='/login' element={<LoginComponent />}></Route>

                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        }></Route>

                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>
                        }></Route>

                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>
                        }></Route>

                        <Route path='*' element={<ErrorComponent />}></Route>
                    </Routes>

                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )

}
