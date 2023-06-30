
import React, { useState } from 'react'

const Header = () => {
useState
const [showMenu, setShowMenu] = useState(false)
  return (
    <header className='flex  items-center justify-between xl:justify-start w-full py-4 px-8  h-[10vh]  z-50  bg-slate-950' >
    <div className='xl:w-1/6 text-center  -mt-4'>
        <a href='#' className='text-2xl font-bold  relative p-1 text-white ' > 
            Jeal Aragon 
        <span className='text-primary text-5xl'>.</span>{" "}
        
        </a>

    </div>

    <nav 
    className={`fixed  w-[80%]  md:w-[40%] xl:w-full h-full  ${showMenu? "left-0": "-left-full" } top-0 xl:static flex-1  flex flex-col xl:flex-row items-center justify-center gap-10  transition-all duration-500 bg-black`}>

        <button  onClick={()=> setShowMenu(!showMenu)}   className='-mt-[100%] text-white text-4xl' > X </button>
        <a href="#" className='text-primary'>Home</a>
        <a href="#" className='text-primary'>About Use</a>
        <a href="#" className='text-primary'>Services</a>
    </nav>

    <button   onClick={()=> setShowMenu(!showMenu)} className='xl:hidden text-2xl p-2 text-white  ' > 
    {showMenu ? "X": <i class='bx bx-menu'></i> }
    
   </button>


</header>
  )
}

export default Header