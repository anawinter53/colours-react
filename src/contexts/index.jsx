import React, { useState, useContext, createContext } from "react";

// create context
const AuthContext = createContext();

// create provider, pass children (placeholder for nested components)
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    // returning jsx, passing val to provider and nest children within
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};


// create custom hook that can be used in all components to use context, allows access to user and setUser
export const useAuth = () => useContext(AuthContext);
