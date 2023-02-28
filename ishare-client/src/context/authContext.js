import axios from "axios"
import { createContext, useEffect, useState } from "react";
import { isEmpty } from "lodash";

export const AuthContext = createContext();

const API = axios.create({ baseURL: 'http://127.0.0.1:5050/api/v1/'})

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const signin = async (inputs) => {
        const res = await API.post("/login", inputs)
        if (!isEmpty(res.data))
        {
            if (!res.data.error)
                setCurrentUser(res.data);
            else
                throw Error(res.data.error)
        }
    }

    const signup  = async (inputs) => {
        const res = await API.post("/signup", inputs)
        if (!isEmpty(res.data))
        {
            if (!res.data.error)
                setCurrentUser(res.data);
            else
                throw Error(res.data.error)
        }
    }

    const logout = async () => {
        setCurrentUser(null)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
      }, [currentUser]
    );

    return (
        <AuthContext.Provider value={{currentUser, signin, signup, logout}}>
            {children}
        </AuthContext.Provider>
    );
};