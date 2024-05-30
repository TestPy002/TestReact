import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-20 bg-blue-300 flex flex-row justify-center items-center'>
        <div className='w-fit h-full flex flex-row'>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSng5iGr1TB2UmRnLdjzCBVlhVuJ2nPzi1y9A&usqp=CAU' alt='Weather icon' className='img w-16 h-16 m-2 border-2 border-cyan-200 rounded-full'/>
         <div className='m-4 text-3xl text-blue-500 sm:text-4xl'>Weather and Whimsy</div>
        </div>
    </div>
  )
}

export default Header