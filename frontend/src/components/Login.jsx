import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate=useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {

            email: data.email,
            password: data.password
        }
        await axios.post('http://localhost:4001/user/login', userInfo).then((res) => {
            console.log(res)
            if (res.data) {


                localStorage.setItem("Users", JSON.stringify(res.data.user))
                document.getElementById('my_modal_3').close();
                toast.success("Login Successful")
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
               navigate("/");
            }
        }).catch((err) => {
            console.log(err.response)
            toast.error(err.response.data.message)
        })
    }
    return (
        <div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}



                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  dark:hover:bg-gray-500 font-bold"
                         onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='space-y-2 mt-4'>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                autoComplete='username'
                                required
                                className='px-3 py-2 border rounded-md w-80 outline-none bg-white dark:bg-slate-800 dark:text-white'
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className='text-red-500 text-sm '>This field is required</span>}
                        </div>
                        <div className='space-y-2 mt-4'>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                required
                                className='px-3 py-2 border rounded-md w-80 outline-none bg-white dark:bg-slate-800 dark:text-white'
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className='text-red-500 text-sm '>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-4 items-center'>
                            <button className='bg-pink-500 text-white rounded-md py-2 px-4 hover:bg-pink-700 cursor-pointer'>Login</button>
                            <p className='italic text-sm font-medium text-gray-700 dark:text-gray-300'>Not reigistered? <Link to='/signup' className='text-blue-400  hover:underline not-italic'>Signup</Link></p>
                        </div>
                    </form>



                </div>
            </dialog>
        </div>
    )
}

export default Login
