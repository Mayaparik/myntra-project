import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function SignUp() {

    const [mobile, setMobile] = useState("")
    const [agreed, setAgreed] = useState(false)
    let navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault();

        const storeMobile = localStorage.getItem("usermobile")


        if (storeMobile === mobile) {
            toast.success("Welcome....successfully! Logged In!")
        } else {
            localStorage.setItem("usermobile", mobile)
            toast.success("SignUp successfully")
        }

        navigate("/")
    }
    


    const isFormValid = mobile.length === 10 && agreed;


    return (
        <div className='bg-pink-100 h-screen lg:pt-25 pt-35  px-5'>
            <form onSubmit={handleSubmit} className='mx-auto  rounded-md bg-white max-w-md  px-8 py-15 space-y-6'>
                <h1><span className='text-xl font-bold text-gray-600'>Login</span>or <span className='text-xl font-bold text-gray-600'>Signup</span></h1>
                <div className="relative w-full">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400  ">
                        +91 |
                    </span>
                    <input
                        required
                        type="number"
                        value={mobile}
                        placeholder="Mobile Number"
                        onChange={(e) => setMobile(e.target.value)}
                        className="w-full pl-16 pr-4 py-2 text-sm border border-gray-300 bg-white  focus:border focus:border-black"
                    />
                </div>
                <div className='flex gap-3'>
                    <input
                        type="checkbox"
                        required
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <p className='font-semibold'>By continuing, i agree to the <Link to='/termsofuse' className='text-pink-500 '>Terms of Use</Link> & <Link to='privacypolicy' className='text-pink-500 '>Privacy Policy</Link>and i am above 18 years old.</p>
                </div>
                <button type='submit'
                    disabled={!isFormValid}
                    className={`w-full py-2 transition-colors ${isFormValid ? "bg-pink-500" : "bg-gray-400 cursor-not-allowed"
                        }`}>Continue</button>
            </form >
        </div>
    )
}

export default SignUp
