import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const[loading, setLoading] = useState(true)
    const[isAuthenticated, setIsAutheticated] = useState(false);


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setIsAutheticated(false);
       return signOut(auth);
    }

    //sign in
    const signIn =(email, password) =>{
        setIsAutheticated(true);
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    //sign in google
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{  
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            return unsubscribe()
        }

    }, [])

    const authInfo = {
        user,
        setUser,
        signIn,
        signInWithGoogle,
        logOut,
        loading,
        setLoading,
        createUser,
       
    }
    return <AuthContext.Provider value={authInfo} >{children}</AuthContext.Provider>
};

export default AuthProvider;