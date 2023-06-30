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


        <h1 className='  text-3xl   md:text-6xl font-bold text-center ' > <span className='text-primary p-2'>Hi! </span> I am a Frontend developed.</h1>

        <p className='text-xls'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptatem nostrum distinctio minima sit voluptas repellendus laborum expedita aliquid impedit dolor ratione, odio perferendis tempore labore, quae delectus porro doloribus.</p>

            <button className='bg-primary text-white text-xl py-2 px-10 rounded-full'> click here </button>

    </div>



<section/>

</section>
  )
}

export default Hero