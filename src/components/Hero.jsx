import React from 'react'

const Hero = () => {
  return (
    <section className=' h-[80vh] grid grid-cols-1 md:grid-cols-8 md:grid-flow-row text-white '>
       
    {/*imagen */}
    <div className=' md:col-span-4 flex justify-center items-center object-cover px-2 '>
    <img className='max-w-[250px] sm:max-w-[350px] md:max-w-[400px]  md:ms-auto'  src="anime3.png" alt="" />
    </div>        
    
    {/*informacion */}
    <div className=' md:col-span-4  flex  flex-col items-center justify-center p-4 gap-3 max-w-auto sm:max-w-auto md:max-w-[400px]  '> 


        <h1 className='  text-3xl   md:text-6xl font-bold text-center ' > <span className='text-primary p-2'>Hello, </span> I am a Peruvian programmer,</h1>

        <p className='text-xls'>  front-end web developer, and I know the need to maintain a simple and useful design (UX and UI) for the users of a system, since I have experience in sales, auditing, and accounting, which allows me to keep an eye on the details of a good usability</p>

            <a href="./cv.pdf" download  className='bg-primary text-white text-xl py-2 px-10 rounded-full  hover:bg-cyan-600 border-2 border-white'> click here </a>
 
    </div>



<section/>

</section>
  )
}

export default Hero