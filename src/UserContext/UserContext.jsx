import React from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import app from '../Firebase/firebase.config'
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// get firebase configuration
const auth = getAuth(app);
//create context provider
export const ContextProvider = createContext();

const UserContext = ({children}) => {
    //state declared
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)

    const gProvider = new GoogleAuthProvider();

    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, gProvider)
    }

    const loginWithEmailAndPassword = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const singUpUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = () => onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> unsubscribe()
    },[])

    return (
        <ContextProvider.Provider value={{
            user,
            singUpUser,
            loginWithGoogle,
            loginWithEmailAndPassword,
            loading,
            logOut
        }}>
            {
                children
            }
        </ContextProvider.Provider>
    );
};

export default UserContext;