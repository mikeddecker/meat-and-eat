import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase';

const AuthUserStateContext = createContext({
    initializing: false,
    user: null,
});

const AuthUserProvider = ({ children }) => {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState(null)

    const onAuthStateChangedCallback = (newUser) => {
        setUser(newUser)
        if (initializing) setInitializing(false)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, onAuthStateChangedCallback)
        return unSubscribe
    }, [])

    return (
        <AuthUserStateContext.Provider value={{ initializing: initializing, user: user }}>
            { children }
        </AuthUserStateContext.Provider>
    )
}

export default AuthUserProvider

export const useAuthStateContext = () => useContext(AuthUserStateContext)
