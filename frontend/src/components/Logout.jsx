import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast,{Toaster} from 'react-hot-toast'


const Logout = () => {
  
   const [authUser,setAuthUser]=useAuth()
   const handleLogout = () =>{
    try {
        setAuthUser({
            ...authUser,
            user:null
        })
        localStorage.removeItem("Users")
        toast.success("Logout Successful")
         setTimeout(()=>{
         window.location.reload()
         },1000)
              

        
         

    } catch (error) {
        toast.error(error.message)
    }
   }
  return (
    <div>
      <button className='bg-red-500 text-white rounded-md px-4 py-2 cursor-pointer'
      onClick={handleLogout} >
        Logout
    </button>
    </div>
  )
}

export default Logout
