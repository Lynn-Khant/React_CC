import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useReducer } from "react";
import { auth } from "../firebase";

const AuthContext=createContext();

const AuthReducer=(state,action)=>{
    switch(action.type){
        case "AUTH_READY":
            return {...state,authReady:true};
            break;
        case "LOG_IN":
            return {...state,user:action.payload};
            break;
        case "LOG_OUT":
            return {...state,user:null};
            break;
        default:
            return state;
    }
}
const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(AuthReducer,{user:null,authReady:false})

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            dispatch({type:"AUTH_READY"})
            if(user){
                dispatch({type:"LOG_IN",payload:user})
            }else{
                dispatch({type:"LOG_OUT"})
            }
        })
    })
    return(
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthContextProvider}