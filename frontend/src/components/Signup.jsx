import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import toast,{Toaster} from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate=useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit =async (data)=>{
    const userInfo={
      fullname:data.name,
      email:data.email,
      password:data.password
    }
    await axios.post('https://bookstore-backend-9kv7.onrender.com/user/signup',userInfo).then((res)=>{
       console.log(res)
       if(res.data){
        toast.success("Signup Successful")
       
       localStorage.setItem("Users",JSON.stringify(res.data.user))
       navigate('/')
       }
    }).catch((err)=>{
      console.log(err.response)
         toast.error(err.response.data.message)
    })

  }

  return (
    <div className='flex h-screen items-center justify-center'>
      {/* Modal Wrapper */}
      <div className="modal modal-open w-100px">
        <div className="modal-box border rounded-md shadow-md p-5 bg-white dark:bg-slate-900 dark:text-white">

          {/* Close Button */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:hover:bg-gray-500 font-bold">✕</Link>

            <h3 className="font-bold text-lg">Signup</h3>

            {/* Name */}
            <div className='space-y-2 mt-4'>
              <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
              <input
                id="signup-name"
                type="text"
                name="name"
                placeholder="Enter your fullname"
                autoComplete='username'
                required
                className='px-3 py-2 border rounded-md w-full outline-none bg-white dark:bg-slate-800 dark:text-white'
                {...register("name", { required: true })}
              />
              {errors.name && <span className='text-red-500 text-sm'>This field is required</span>}
            </div>

            {/* Email */}
            <div className='space-y-2 mt-4'>
              <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input
                id="signup-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete='username'
                required
                className='px-3 py-2 border rounded-md w-full outline-none bg-white dark:bg-slate-800 dark:text-white'
                {...register("email", { required: true })}
              />
              {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
            </div>

            {/* Password */}
            <div className='space-y-2 mt-4'>
              <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
              <input
                id="signup-password"
                type="password"
                name="password"
                placeholder="Enter your password"
                autoComplete='current-password'
                required
                className='px-3 py-2 border rounded-md w-full outline-none bg-white dark:bg-slate-800 dark:text-white'
                {...register("password", { required: true })}
              />
              {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}
            </div>

            {/* Buttons */}
            <div className='flex flex-col gap-3 mt-6 items-center'>
              <button type="submit" className='bg-pink-500 text-white rounded-md py-1 px-4 hover:bg-pink-700'>
                Signup
              </button>
              <p className='italic text-sm font-medium text-gray-700 dark:text-gray-300'>
                Have an account?  
                <button
                  type="button"
                  className="text-blue-400 ml-1 hover:underline not-italic"
                  onClick={() => document.getElementById('my_modal_3').showModal()}
                >
                  Login
                </button>
              </p>
            </div>
          </form>

          {/* Login component rendered outside <p> to prevent <dialog> nesting issue */}
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Signup;
