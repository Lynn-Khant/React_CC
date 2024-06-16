import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

function useLogout(){
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const logout=async()=>{
        try{
            setLoading(true);
            let res=await signOut(auth);
            setError(null);
            setLoading(false);
            return res.user;
        }catch(e){
            setLoading(false);
            setError(e.message);
        }
    }

    return {error,loading,logout};
}

export {useLogout}