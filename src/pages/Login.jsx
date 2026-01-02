import React from 'react'
import Navbar from '../components/Navbar';
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <>
    <div className='min-h-screen bg-[#2f8f8b] flex items-center justify-center'>
      <div className='relative w-[360px] h-[520px] bg-[#f4f6e8] rounded-[28px] overflow-hidden shadow-2xl'>
        <div className='absolute top-0 left-0 w-full h-[45%] bg-[#a7c77a] clip-diagonal'></div>
      {/* content */}
        <div className='relative z-10 h-full flex flex-col justify-center px-6'>
          <h2 className='text-2xl font-bold text-[#2f4f2f] mb-2'>
            Login</h2>
          <p className='text-sm text-[#4b5f52] mb-8'>
            Log in to your account 
          </p>

          <input type="text" placeholder='Username'
          className='mb-4 px-4 py-2 rounded-md bg-[#e7efd8] focus:ring-2 focus:ring-[#3f6b4f]' />

          <input type="password" placeholder='Password'
          className='mb-6 px-4 py-2 rounded-md bg-[#e7efd8] focus:ring-2 focus:ring-[#3f6b4f]' />

          <button className='bg-[#355c44] text-white py-2 rpunded-md hover:bg-[#2f4f3b] transition'>
            Sign In</button>

          <p className='text-sm text-center text-[#355c44] mt-6 cursor-pointer'>
            Forget Password?
          </p>

          <p className='text- text-center text-gray-600 mt-4'>
            Don't have an account?{" "}
           <Link to="/signup" className="text-[#355c44] font-medium">
              Sign up
            </Link>
          
          </p>
        </div>

      </div>

    </div>
   </>
  );
};

export default Login
