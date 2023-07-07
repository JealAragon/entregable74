import React from 'react'
import Skd from './Skd'

const Main = () => {
  return (
    <section className=' h-[90vh] grid grid-cols-1  text-white  m-auto'>
       
     
    
    {/*informacion */}
    <div className=' md:col-span-4  flex  flex-col items-center justify-center p-4  max-w-auto sm:max-w-auto md:max-w-[1100px] m-auto  gap-4 '> 

        <h1 className='  font-[Poppins]  font-extrabold  text-5xl sm:text-7xl   md:text-8xl    lg:text-[150px]  text-center mt-28 ' > JEAL ARAGON </h1>
              
        <h2 className='font-[Inconsolata]  text-xl   sm:text-2xl md:text-4xl  text-center ' > <span className='text-primary '>Hola! </span> Soy desarrollador Front-end y programador Web </h2>
 
    <div className='font-[Inconsolata]  text-xl   sm:text-2xl md:text-4xl  text-center  flex  mt-20 gap-4  '> 
    <h2>SKD:</h2>
    <Skd/>
    </div>  

    </div>
      


<section/>

</section>
  )
}

export default Main