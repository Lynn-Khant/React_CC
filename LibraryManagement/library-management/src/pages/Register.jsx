import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup';
import { Navigate, useNavigate } from 'react-router-dom';

function Register() {
    let navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    let {error,loading,signUp}=useSignup();

    const registerUser=async(e)=>{
        e.preventDefault();
        let user=await signUp(email,password);
        console.log(user);
        navigate("/");
    }
    return (
        <div className="w-full max-w-lg mt-16 mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={registerUser}>
                <h1 className='text-2xl font-bold text-primary my-5'>Register Form</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Register
                    </button>
                </div>
            </form>
            
        </div>
    )
}

export default Register;