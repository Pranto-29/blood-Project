

import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../fribase/fribase.init';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const[roleLoading, setRoleLoading] = useState(true);
    const [role, setRole] = useState('');


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const  updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser,profile)
    }
  
    const registerUser = (email, password) => {
     
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) =>{
           setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
  const signInGoogle = () => {
    setLoading(true)
      return signInWithPopup(auth, googleProvider);
  }

  useEffect(() =>{
    const unSubcribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
        setLoading(false)
        console.log(currentUser);
    })
    return() =>{
        unSubcribe()
    }
  }, [])
  useEffect(() => {
    if(!user) return
    axios.get(`http://localhost:5000/user/role/${user.email}`)
    .then(res => {
        setRole(res.data.role)
        setRoleLoading(false)
    })
  })


    const authInfo = {
        user,
        loading,
       registerUser,
       signInUser,
       signInGoogle,
       logOut,
       updateUserProfile,
       role,
       roleLoading,
    }

    return (
      //  <AuthContext value={authInfo}>
      //   {children}
      //  </AuthContext>
       
   <AuthContext.Provider value={authInfo}>
      {children}
   </AuthContext.Provider>

    );
};

export default AuthProvider;