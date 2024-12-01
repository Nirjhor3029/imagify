/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react"

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [user, setUser] = useState(null)

    const value = {
        user,
        setUser
    }

    return (
        <AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;