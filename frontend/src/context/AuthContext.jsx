import { createContext, useContext, useState } from "react";

export const AuthContext=createContext();

export const useAuthContext=() => {
    return useContext(AuthContext);
}

export const AuthContextProvider=({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);
    //parse to convert string to object 
    //if empty then return null

    return <AuthContext.Provider value={{authUser, setAuthUser}}> 
    {children} 
    </AuthContext.Provider>
}