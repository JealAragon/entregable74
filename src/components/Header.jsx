
import React, { useState } from 'react'

const Header = () => {

const [showMenu, setShowMenu] = useState(false)

const handleClickH = ()=>{
  window.open('https://github.com/JealAragon/', '_blank')
  }

const handleClickl = ()=>{
    window.open('https://www.linkedin.com/in/jeal-aragon-gonzales-293580177/', '_blank')
    }
const handleClickw = ()=>{
      window.open('https://api.whatsapp.com/send?phone=51997900200&text=Hola,%20vi%20tu%20proyecto%20', '_blank')
      }

 const handleClicki = ()=>{
        window.open('https://www.instagram.com/jealaragon123/', '_blank')
        }




  return (
    <header className='flex  items-center justify-between xl:justify-start w-full py-4 px-2  h-[10vh]  z-50  bg-[#1f2028]' >
   
    <div className='xl:w-1/3 text-center align-middle -mt-4 '>
        <a href='#' className=' font-[Inconsolata:wght@300]  relative p-1 text-primary  text-base sm:text-lg md:text-2xl  ' > 
            Jeal Aragon 
        <span className='text-white text-5xl'>.</span>        
        </a>

    </div>

    <nav className='  rounded-lg px-1 py-2 gap-2 flex  xl:w-1/3 justify-center ' >
     <button  onClick={handleClickH}  className='text-white rounded-xl border-2  p-2  border-primary  hover:bg-cyan-600 text-xs sm:text-lg md:text-2xl ' > <i className='bx bxl-github' ></i>  </button>
      <button onClick={handleClickl} className='text-white rounded-xl border-2  p-2  border-primary  hover:bg-cyan-600  text-xs sm:text-lg md:text-2xl ' > <i className=' bx bxl-linkedin'></i>  </button>
      <button onClick={handleClickw} className='text-white rounded-xl border-2  p-2  border-primary  hover:bg-cyan-600 text-xs sm:text-lg md:text-2xl' > <i className='bx bxl-whatsapp' ></i>  </button>
      <button onClick={handleClicki} className='text-white rounded-xl border-2  p-2  border-primary  hover:bg-cyan-600 text-xs sm:text-lg md:text-2xl ' > <i className='bx bxl-instagram'  ></i>  </button>
    </nav> 


    <nav 
    className={` ${showMenu? "top-0": "-top-full" } fixed w-[100%] h-[50%]  right-0 -top-full   md:w-[40%] xl:w-1/3   xl:static flex-1  flex flex-col xl:flex-row items-center justify-end sm:justify-center gap-5  transition-all duration-500 bg-secundary p-20 border-b-4 border-b-primary sm:border-none `}>

        <button  onClick={()=> setShowMenu(!showMenu)}   className='-mt-[50%] text-white text-2xl  ' > X </button>
        
        <a href="#" className='text-primary'>Home</a>
        <a href="#" className='text-primary'>About Use</a>
        <a href="#" className='text-primary'>Services</a>
    </nav>
    

      
    <button   onClick={()=> setShowMenu(!showMenu)} className='xl:hidden text-2xl p-2 text-white ' > 
    {showMenu ? <i className='bx bx-x'></i>   : <i className='bx bx-menu'></i> }
    
   </button>


</header>
  )
}

export default Header