import React from 'react'
import { Link } from 'react-router-dom'


const Bottomtext = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
      <Link to="/Projects" className='text-[5vw] uppercase border-3 border-white rounded-full px-10 
      py-1 pt-1 pb-0 mb-3 hover:text-yellow-300 hover:border-yellow-300 leading-[6vw]'>Projects</Link>
      <Link to="/Agence" className='text-[5vw] uppercase border-3 border-white rounded-full px-10 py-1 pt-1 pb-0 mb-3 hover:text-yellow-300 hover:border-yellow-300 leading-[6vw]'>Agence</Link>
    </div>
  )
}

export default Bottomtext