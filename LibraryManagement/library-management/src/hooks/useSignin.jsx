import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { auth } from "../firebase";

function useSignin(){
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const signIn=async(email,password)=>{
        try{
            setLoading(true);
            let res=await signInWithEmailAndPassword(auth,email,password);
            setError(null);
            setLoading(false);
            return res.user;
        }catch(e){
            setLoading(false);
            setError(e.message);
        }
    }

    return {error,loading,signIn};
}

export {useSignin}