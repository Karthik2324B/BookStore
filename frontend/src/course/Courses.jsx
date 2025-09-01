import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'

const Courses = () => {
  return (

    <>
     <div className="dark:bg-slate-900 dark:text-white">


      <Navbar className="fixed top-0 left-0 w-full font-light shadow-md z-50 bg-white" />
      <div className='pt-20 min-h-screen'> {/* pushes below navbar */}
        <Course />
      </div>
      <Footer />
     </div>
    
    </>


  )
}

export default Courses

