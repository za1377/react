import { createContext, useContext, useState } from "react";
import { basicAuthCheck } from "../../api/HelloWorldApiService";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider( {children} ) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const [username, setUsername] = useState(false)
    const [token, setToken] = useState(null)

    // function login(username, password) {
    //     if(username === 'admin' && password === '123456') {
    //         setIsAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     }else{
    //         setIsAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }

    async function login(username, password) {
        const batoken = 'Basic ' + window.btoa(username + ":" + password)

        try{
            const response = await basicAuthCheck(batoken);

            if(response.status==200) {
                setIsAuthenticated(true)
                setUsername(username)
                setToken(batoken)
                return true
            }else{
                logout()
                return false
            }
        } catch(error) {
            logout()
            return false
        }

    }

    function logout() {
        setIsAuthenticated(false)
        setUsername(null)
        setToken(null)
    }


    return(
        <AuthContext.Provider value={ {isAuthenticated, login, logout, username, token} }>
            {children}
        </AuthContext.Provider>
    )

}