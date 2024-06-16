import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import BookForm from "../components/BookForm";

function Create(){
    

    // let {setPostData,data:book}=useFetch('http://localhost:3000/books',"POST");

    

    // useEffect(()=>{
    //     if(book){
    //         navigate("/")
    //     }
    // },[book])

    
    return(
        <BookForm/>
    )
}

export default Create;