import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [curentUser, setCurentUser] = useState();

    return(
        <AuthContext.Provider value={{curentUser}}>
            {props.children}
        </AuthContext.Provider>
    )
    
}

export default AuthContextProvider;