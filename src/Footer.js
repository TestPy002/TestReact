import React from 'react'
import Cook from './Cook'
import Icon from './Icon'

const Footer = () => {
  return (
    <div className='w-full h-96 flex flex-col justify-around bg-black md:h-72 md:flex-row'>
        <Cook/>
        <Icon/>
    </div>
  )
}

export default Footer