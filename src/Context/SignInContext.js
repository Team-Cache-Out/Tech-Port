import { useState, createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const SignInContext = createContext()

export const SignInProvider = ({children}) => {
    //state
    const [user, setUser] = useLocalStorage('Current_User', null)
    const [currentUni, setCurrentUni] = useLocalStorage('Current_Uni', null)
    
    useEffect(() => {
        localStorage.setItem('Current_User', JSON.stringify(user) )
        
    }, [user, currentUni])
    // functionality / functions
    return <SignInContext.Provider value={{
        user,
        setUser,
        currentUni,
        setCurrentUni
    }}>
        {children}
    </SignInContext.Provider>
}

export default SignInContext