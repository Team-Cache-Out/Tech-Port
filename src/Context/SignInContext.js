import { useState, createContext } from "react";

const SignInContext = createContext()

export const SignInProvider = ({children}) => {
    //state
    const [user, setUser] = useState(null)

    // functionality / functions
    return <SignInContext.Provider value={{
        user,
        setUser
    }}>
        {children}
    </SignInContext.Provider>
}

export default SignInContext