import Home from "./home/Home"
import Courses from "./course/Courses"
import Signup from "./components/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import ThemeInitializer from "./components/ThemeInitializer";



function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser)
  return (
    <>
    <ThemeInitializer/>
      <div className= "dark:bg-slate-900 dark:text-white bg-white text-black">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />:<Navigate to='/signup'/>} />
        <Route path="/signup" element={<Signup />} />
        
        
       
      </Routes>
      <Toaster />
      </div>

    </>
  )
}

export default App




