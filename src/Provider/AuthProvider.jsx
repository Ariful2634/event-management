import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword, signOut, signInWithPopup, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase';

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
   

    // google login

    const googleLogin = (value)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    // create user

    const createUser = (email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    // login user

    const logInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logout user

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    // update user's profile

    const updateUserProfile = ()=>{
        updateProfile(auth.user,{
            displayName: "Md Ariful Islam", photoURL: "https://i.ibb.co/ScgNTwv/IMG-20190724-134228.jpg"
        })
    }

    // subscribe

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setUser(user)
            setLoading(false)

        })
    },[])

    // console.log(user)



    const authInfo = {
        googleLogin,
        createUser,
        logInUser,
        user,
        logOut,
        loading,
        updateUserProfile
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;