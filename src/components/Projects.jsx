import React from 'react'

const Projects = () => {
  return (
    <section className=' s'>
    <section className=' h-[60vh] flex  flex-wrap flex-cols-1 md:flex-cols-8 md:flex-flow-row    text-white mt-20 md:mt-0  justify-center items-center'>

{/*imagen */}
<div className=' md:col-span-4 flex justify-center items-center object-cover px-2 '>
<img className='max-w-[200px] sm:max-w-[300px] md:max-w-[350px]  md:ms-auto'  src="anime3.png" alt="" />
</div>        

{/*informacion */}
<div className=' md:col-span-4  flex  flex-col items-center justify-center p-4 gap-3 max-w-auto sm:max-w-auto md:max-w-[400px]  '> 


    <h1 className='  text-3xl   md:text-6xl font-bold text-center ' > <span className='text-primary p-2'>Hi! </span> I am a Frontend developed.</h1>

    <p className='text-xls'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptatem nostrum distinctio minima sit voluptas repellendus laborum expedita aliquid impedit dolor ratione, </p>

        <button className='bg-primary text-white text-xl py-2 px-10 rounded-full'> click here </button>

</div>



<section/>

</section>

<section className=' h-[60vh] flex  flex-wrap flex-cols-1 md:flex-cols-8 md:flex-flow-row sm:flex-row-reverse   text-white  justify-center items-center mt-28 md:mt-0   '>

{/*imagen */}
<div className=' md:col-span-4 flex justify-center items-center object-cover px-2 '>
<img className='max-w-[200px] sm:max-w-[300px] md:max-w-[350px]  md:ms-auto'  src="anime3.png" alt="" />
</div>        

{/*informacion */}
<div className=' md:col-span-4  flex  flex-col items-center justify-center p-4 gap-3 max-w-auto sm:max-w-auto md:max-w-[400px]  '> 


    <h1 className='  text-3xl   md:text-6xl font-bold text-center ' > <span className='text-primary p-2'>Hi! </span> I am a Frontend developed.</h1>

    <p className='text-xls'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptatem nostrum distinctio minima sit voluptas repellendus laborum expedita aliquid impedit dolor ratione, </p>

        <button className='bg-primary text-white text-xl py-2 px-10 rounded-full'> click here </button>

</div>



<section/>

</section>


</section>
  )
}

export default Projects