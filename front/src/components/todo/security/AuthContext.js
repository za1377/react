import { createContext, useContext, useState } from "react";
import { basicAuthCheck } from "../../api/HelloWorldApiService";
import { apiClient } from "../../api/ApiClient";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider( {children} ) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const [username, setUsername] = useState(false)
    const [token, setToken] = useState(null)

    async function login(username, password) {
        const batoken = 'Basic ' + window.btoa(username + ":" + password)

        try{
            const response = await basicAuthCheck(batoken);

            if(response.status==200) {
                setIsAuthenticated(true)
                setUsername(username)
                setToken(batoken)

                apiClient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization = batoken
                        return config
                    }
                )

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