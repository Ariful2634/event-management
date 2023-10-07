import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";
import auth from '../firebase/firebase';

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
   

    // google login

    const googleLogin = (value)=>{
        return signInWithPopup(auth,provider)
    }

    // create user

    const createUser = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    // login user

    const logInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logout user

    const logOut = ()=>{
        return signOut(auth)
    }

    // subscribe

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setUser(user)

        })
    },[])

    // console.log(user)



    const authInfo = {
        googleLogin,
        createUser,
        logInUser,
        user,
        logOut
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;