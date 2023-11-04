import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider( {children} ) {

    function login(username, password) {
        if(username === 'admin' && password === 'pass') {
            setIsAuthenticated(true)
            return true
        }else{
            setIsAuthenticated(false)
            return false
        }
    }

    function logout() {
        setIsAuthenticated(false)
    }

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return(
        <AuthContext.Provider value={ {isAuthenticated, login, logout} }>
            {children}
        </AuthContext.Provider>
    )

}