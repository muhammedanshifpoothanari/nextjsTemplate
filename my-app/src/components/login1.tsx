"use client"
import React, { useState } from 'react'
import logoImage from '../../public/Ladder-Logo.png';
import Image from 'next/image';
import { userData } from './userData';
import { useRouter } from 'next/navigation';
// import './Login.css'




const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [jobType, setJobType] = useState('');
    const [error, setError] = useState(false);
    const emailDb = userData[0].email;
    const passwordDb = userData[0].password;


    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (email === emailDb && password === passwordDb) {
            console.log("login success");
            router.push('/')

        } else {
            console.log("login failed");
            setError(true)

        }
    }

    return (
        <>
            <div className='main-container flex items-center justify-center h-screen bg-[#f2f2f2] '>
                <div className='login-wrapper w-[450px] h-[550px]  bg-white  rounded-2xl' style={{ boxShadow: '32px 35px 22px -3px rgba(0,0,0,0.1)' }}>
                    <div className='   flex flex-col  gap-8 items-center justify-center  m-8 '>
                        <div className='logo'  >
                            <Image
                                src={logoImage}
                                priority={true}
                                alt="Screenshots of the dashboard project showing desktop version"
                            />
                        </div>
                        <h1 className=' text-black text-2xl font-bold'>Login to Admin Page</h1>
                        <h2 className={error ? `text-red-500 font-semibold` : `hidden`}>login failed: wrong credentials</h2>
                        <div className='w-full'>
                            <form onSubmit={handleSubmit} className='w-full'>
                                <div className="relative w-full mt-4">
                                    {/* select */}
                                    <select
                                        id="jobType"
                                        value={jobType}
                                        required
                                        onChange={(e) => setJobType(e.target.value)}
                                        className="w-full my-3 py-3 px-4 bg-[#f2f2f2] border-none rounded-md  transition-all duration-200 focus:outline-none"
                                    >
                                        <option value="" disabled>Select Job Type</option>
                                        <option value="developer">Developer</option>
                                        <option value="designer">Designer</option>
                                        <option value="manager">Manager</option>
                                    </select>
                                    <input type="email" id="email"
                                        className={` w-full mx-auto py-3 px-4 bg-[#f2f2f2] `}
                                        style={{ border: 'none' }}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor='email'>
                                        Email
                                    </label>
                                    {/* sfsdf */}
                                    <input type="password" id="password"
                                        className={` w-full mx-auto py-3 px-4 bg-[#f2f2f2]  `}
                                        style={{ border: 'none' }}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor='password'>
                                        Password
                                    </label>
                                </div>
                                <button className=' text-white w-full px-28 bg-blue-500 mx-auto my-5 py-3 rounded-lg'>Login</button>
                                <hr className='bg-white h-[1px] border-0  mx-auto mt-4 w-full' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
