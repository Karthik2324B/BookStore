import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect ,useState} from 'react'
 

const Course = () => {
  const [book,SetBook]=useState([])
  useEffect(()=>{
    const getBooks=async ()=>{
      try {
       const response=await axios.get('http://localhost:4001/book')
       console.log(response)
       SetBook(response.data)
      } catch (error) {
        console.log(error)
      }
      
    }
    getBooks()
  },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-8 px-4'>
        <div className='mt-4 text-center space-y-4'>
          <h1 className='text-4xl'>We're delighted to have you <span className='text-pink-500'>Here!:)</span></h1>
          <p className='mt-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ducimus consequuntur a nihil tempora. Aspernatur laborum rerum a, similique ab voluptatum voluptatibus ipsam quas doloribus reprehenderit excepturi temporibus modi explicabo.
            Quos dolor quasi similique repellat. Optio dolorum iusto et ducimus laudantium excepturi explicabo officia nulla? Odio quos atque.</p>
          <Link to='/'>
            <button className='bg-pink-500 text-white hover:bg-pink-700 py-2 px-4 rounded-md cursor-pointer'>Back</button>
          </Link>


        </div>
        <div className='grid grid-cols-1 md:grid-cols-4'>
          {
            book.map((item, index) => (
              <Cards item={item} key={item.id} />
              
            ))
          }
        </div>
      </div>

    </>

  )
}

export default Course
