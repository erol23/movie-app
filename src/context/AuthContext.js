import { createContext, useState, useEffect } from 'react';
import { userObserver } from '../auth/firebase';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [curentUser, setCurentUser] = useState();

    useEffect(() => {
        userObserver(setCurentUser)
    },[]);

    return(
        <AuthContext.Provider value={{curentUser}}>
            {props.children}
        </AuthContext.Provider>
    )
    
}

export default AuthContextProvider;