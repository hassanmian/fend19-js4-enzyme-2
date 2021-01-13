import React, { useState, createContext } from 'react'

export const UserContext = createContext({})

export default function UserContextProvider({children}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(null)

    function logInUser() {
        setIsLoggedIn(true)
        setUserData({
            username: "johndoe"
        })
    }

    function logOutUser() {
        setIsLoggedIn(false)
        setUserData(null)
    }

    return (
        <UserContext.Provider 
            value={{
                isLoggedIn, setIsLoggedIn, 
                userData, setUserData,
                logInUser, logOutUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}