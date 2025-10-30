import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../../../context/NavContext'

const Navbar = () => {

    const navGreenRef = useRef(null)
    const [navOpen , setNavOpen] = useContext(NavbarContext)



  return (
    <div className='flex fixed bg-none top-0 z-10 w-full items-start justify-between'>
        <div className='p-2'>
            <div className=''>
            <h1 className='font-[font2] text-white text-7xl font-extrabold'>K72</h1>
        </div>
        </div>

        <div onClick={()=>{
          setNavOpen(true)
        }} onMouseEnter={()=>{navGreenRef.current.style.height = '100%'}}
        onMouseLeave={()=>navGreenRef.current.style.height = '0%'} className=' h-13 relative bg-black w-[16vw]'>

            <div ref={navGreenRef} className='bg-[#D3FD50] transition-all absolute h-0 w-full ' ></div>
            <div className='relative flex flex-col gap-1 justify-center items-end h-full px-10'>
              <div className='w-18 h-0.5 bg-white'></div>
              <div className='w-10 h-0.5 bg-white'></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar