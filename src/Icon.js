import React from 'react'
import { Link } from 'react-router-dom'
import Quote from './Quote'
const Icon = () => {
  return (
    <div className='w-full h-2/6 bg-yellow-600 flex flex-row justify-evenly md:w-3/12 md:h-full md:flex-col'>
        <Quote/>
        <Link to='/News' className='bg-red-100 h-full w-1/2 md:w-full md:h-1/2 flex flex-row justify-center items-center'>
          <div>
            Click here--
            News
          </div>
        </Link>
    </div>
  )
}

export default Icon