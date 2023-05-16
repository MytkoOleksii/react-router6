import React, {createContext, useState} from 'react';

export const AuthContext = createContext(null)

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const singIn = (newUser, callBack) => {
        setUser(newUser)
        callBack()
    }
    const singOut = (callBack)=> {
        setUser(null)
        callBack()
    }
    const value = {user,singIn,singOut}
    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>

}

export default AuthProvider;