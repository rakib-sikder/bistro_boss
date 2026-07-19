import { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { getAuth,signOut ,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";


export const AuthContext= createContext(null)

// Without real Firebase env vars configured on this deployment, getAuth() throws
// (auth/invalid-api-key) — and since nothing here is wrapped in an error boundary,
// an uncaught throw at module scope takes down the entire app (blank page). Falling
// back to null lets the site render in a browse-only mode instead of crashing.
let auth = null;
try {
    auth = getAuth(app)
} catch (e) {
    console.error("Firebase Auth failed to initialize — is VITE_apiKey etc. configured?", e);
}

const authUnavailable = () => Promise.reject(new Error("Sign-in isn't configured on this deployment yet."));

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    const signUp =(email,password)=>{
        if (!auth) return authUnavailable()
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn =(email,password)=>{
        if (!auth) return authUnavailable()
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        if (!auth) return Promise.resolve()
        return signOut(auth)
    }

    useEffect(()=>{
        if (!auth) {
            setLoading(false)
            return
        }
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }

    },[])

    const authinfo={
        user,
        loading,
        signUp,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
