import { useState, createContext } from "react";

const SignInContext = createContext()

export const SignInProvider = ({children}) => {
    //state
    const [user, setUser] = useState(null)
    const [currentUni, setCurrentUni] = useState(null)

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