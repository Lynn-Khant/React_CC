import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    let {error,loading,signIn}=useSignup();
    let navigate=useNavigate();
    const loginUser=async(e)=>{
        e.preventDefault();
        let user=await signIn(email,password);
        navigate("/");
    }

    return (
        <div class="w-full max-w-lg mt-16 mx-auto">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={loginUser}>
                <h1 className='text-2xl font-bold text-primary my-5'>Login Form</h1>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Login
                    </button>
                </div>
            </form>
            
        </div>
    )
}

export default Login;